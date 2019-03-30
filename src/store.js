import Vue from 'vue'
import Vuex from 'vuex'
import menuService from './services/menu.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rests: [],
    selectedRest: null,
    restItems: [],
    sections: []
  },
  mutations: {
    setRests(state, { rests }) {
      state.rests = rests;
    },
    setRest(state, { rest, items }) {
      state.selectedRest = rest;
      state.restItems = items
    },
    setSections(state, { sections }) {
      state.sections = sections
    },
    setItems(state, { restItems }) {
      state.restItems = restItems
    },
    addSection(state, { newSection }) {
      state.sections.push(newSection)
    },
    changeSectionName(state, { sectionIdx, section }) {
      state.sections[sectionIdx].title = section.title
    },
    changeSection(state, { sectionIdx, section }) {
      state.restItems.forEach(item => {
        if (item.section_id === section.id) item.section_id = state.sections[sectionIdx].id
      })
    }
  },
  getters: {
    rests({ rests }) {
      return rests
    },
    rest({ selectedRest }) {
      return selectedRest
    },
    itemsForDisplay({ restItems, sections }) {
      // this function should take the items array, make it an object (key = section_id, velue = section object
      // with an array of items in this section) then it changes the object to by an array and sorts them by section position
      return Object.values(restItems.reduce((acc, item) => {
        if (!acc[item.section_id]) {
          let section = sections.find(({ id }) => id === item.section_id)
          acc[item.section_id] = Object.assign({}, section, { items: [item] })
        } else {
          acc[item.section_id].items.push(item)
        }
        return acc
      }, {}))
        .sort((a, b) => a.position - b.position)
    },
    sections({ sections }) {
      return sections
    }
  },
  actions: {
    async loadRests({ commit }) {
      const rests = await menuService.getRests();
      commit({ type: 'setRests', rests });
    },
    async loadSections({ commit }) {
      const sections = await menuService.getSections()
      sections.sort((a, b) => a.position - b.position)
      commit({ type: 'setSections', sections })
    },
    async setRest({ commit, state }, { restId }) {
      const items = await menuService.getRestItems(restId)
      const rest = state.rests.find(({ id }) => id === restId)
      commit({ type: 'setRest', rest, items })
    },
    async saveCanges({ state }, { restId }) {
      try {
        await menuService.saveCanges(restId, state.restItems)
        console.log(state.restItems)
      } catch (error) {
        console.log(error)
      }
    },
    addSection({ commit, state, dispatch }) {
      const newSection = {
        id: menuService.makeId(),
        title: '',
        position: state.sections[state.sections.length - 1].position + 1
      }
      commit({ type: 'addSection', newSection })
      dispatch({ type: 'addItem', sectionId: newSection.id })
    },
    deleteItem({ commit, state }, { itemId }) {
      const restItems = state.restItems.filter(({ id }) => id !== itemId)
      commit({ type: 'setItems', restItems })
    },
    addItem({ commit, state }, { sectionId }) {
      const emptyItem = {
        id: menuService.makeId(),
        section_id: sectionId,
        title: "Item name",
        description: "item description",
        price: 0
      };
      const restItems = state.restItems.slice()
      restItems.push(emptyItem)
      commit({ type: 'setItems', restItems })
    },
    deleteSection({ commit, state }, { sectionId }) {
      const restItems = state.restItems.filter(({ section_id }) => section_id !== sectionId)
      commit({ type: 'setItems', restItems })

    },
    editItem({ commit, state }, { item }) {
      const itemIdx = state.restItems.findIndex(({ id }) => item.id === id)
      const restItems = state.restItems.slice()
      restItems.splice(itemIdx, 1, item)
      commit({ type: 'setItems', restItems })
    },
    changeSectionName({ commit, state }, { section }) {
      let sectionIdx = state.sections.findIndex(({ title }) => title === section.title)
      if (sectionIdx === -1) {
        sectionIdx = state.sections.findIndex(({ id }) => id === section.id)
        commit({ type: 'changeSectionName', sectionIdx, section })
      } else {
        commit({ type: 'changeSection', sectionIdx, section })
      }
    }
  }
})