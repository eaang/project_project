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
                description: 'A project to hold other projects.',
                github: '',
                images: [
                  'projects/gzmpo4abib15yesjaeep',
                  'projects/sh2dnhcx9nqzypl7ysqw',
                ],
                languages: ['HTML', 'CSS', 'Bulma', 'Buefy', 'Vue', 'Nuxt'],
                link: 'http://testlink.io',
                name: 'The Project of Projects',
                progress: 7,
                summary: 'A project to hold other projects.',
              },
              {
                id: '2',
                description: 'A project to hold other projects.',
                github: '',
                images: [
                  'projects/gzmpo4abib15yesjaeep',
                  'projects/sh2dnhcx9nqzypl7ysqw',
                ],
                languages: ['HTML', 'CSS', 'Bulma', 'Buefy', 'Vue', 'Nuxt'],
                link: 'http://testlink.io',
                name: 'Project 2',
                progress: 7,
                summary: 'A project to hold other projects.',
              },
              {
                id: '3',
                description: 'A project to hold other projects.',
                github: '',
                images: [
                  'projects/gzmpo4abib15yesjaeep',
                  'projects/sh2dnhcx9nqzypl7ysqw',
                ],
                languages: ['HTML', 'CSS', 'Bulma', 'Buefy', 'Vue', 'Nuxt'],
                link: 'http://testlink.io',
                name: 'Project 3',
                progress: 7,
                summary: 'A project to hold other projects.',
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
