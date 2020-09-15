export const state = () => ({
  loadedProjects: [],
})

export const mutations = {
  setProjects(state, projects) {
    state.loadedProjects = projects
  },
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    await this.$axios
      .$get('https://the-projects-project.firebaseio.com/projects.json')
      .then((res) => {
        const projectArray = []
        for (const key in res) {
          projectArray.push({ ...res[key], id: key })
        }
        vuexContext.commit('setProjects', projectArray)
      })
      .catch((e) => {
        context.error(e)
      })
  },
  setProjects(vuexContext, projects) {
    vuexContext.commit('setProjects', projects)
  },
}

export const getters = {
  loadedProjects(state) {
    return state.loadedProjects
  },
}
