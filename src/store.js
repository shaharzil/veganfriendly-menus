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
      var items = Object.values(restItems.reduce((acc, item) => {
        if (!acc[item.section_id]) {
          let section = sections.find(({ id }) => {
            return id === item.section_id
          })
          acc[item.section_id] = Object.assign({}, section, { items: [item] })
        } else {
          acc[item.section_id].items.push(item)
        }
        return acc
      }, {}))
        .sort((a, b) => a.position - b.position);
      return items

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
    async saveCanges({ state }) {
      try {
        await menuService.saveCanges(state.selectedRest.id, state.restItems)
      } catch (error) {
        console.log(error)
      }
    },
    async addSection({ state, dispatch }, { title }) {
      let newSection = state.sections.find(section => section.title === title)
      if (!newSection) {
        newSection = {
          title: title,
          position: parseInt(state.sections[state.sections.length - 1].position) + 1
        }
        await menuService.addSection(newSection)
      }
      dispatch({ type: 'loadSections' })
      let section = state.sections.find(section => {
        return section.title === title
      })
      dispatch({ type: 'addItem', sectionId: section.id })
    },
    deleteItem({ commit, state }, { itemId }) {
      const restItems = state.restItems.filter(({ id }) => id !== itemId)
      commit({ type: 'setItems', restItems })
    },
    addItem({ commit, state }, { sectionId }) {
      const emptyItem = {
        id: menuService.makeId(),
        section_id: sectionId,
        title: "",
        description: "",
        price: ''
      };
      console.log(emptyItem.id)
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
  }
})