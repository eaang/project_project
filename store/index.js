import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProjects: [],
    },
    mutations: {
      setProjects(state, projects) {
        state.loadedProjects = projects
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setProjects', [
              {
                id: '1',
                title: 'Project 1',
                summary:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                thumbnail: 'https://picsum.photos/640/480/',
              },
              {
                id: '2',
                title: 'Project 2',
                summary:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                thumbnail: 'https://picsum.photos/640/480/',
              },
              {
                id: '3',
                title: 'Project 3',
                summary:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                thumbnail: 'https://picsum.photos/640/480/',
              },
            ])
            resolve()
          }, 1000)
        })
      },
      setProjects(vuexContext, projects) {
        vuexContext.commit('setProjects', projects)
      },
    },
    getters: {
      loadedProjects(state) {
        return state.loadedProjects
      },
    },
  })
}

export default createStore
