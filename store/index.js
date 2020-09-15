export const state = () => ({
  loadedProjects: [],
})

export const mutations = {
  setProjects(state, projects) {
    state.loadedProjects = projects
  },
  addProject(state, project) {
    state.loadedProjects.push(project)
  },
  editProject(state, editedProject) {
    const projectIndex = state.loadedProjects.findIndex(
      (project) => project.id === editedProject.id
    )
    state.loadedProjects[projectIndex] = editedProject
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
  addProject(vuexContext, project) {
    const projectId = project.name
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()
    const createdProject = project
    return this.$axios
      .$put(
        'https://the-projects-project.firebaseio.com/projects/' +
          projectId +
          '.json',
        createdProject
      )
      .then((res) => {
        vuexContext.commit('addProject', { ...createdProject, id: projectId })
      })
  },
  editProject(vuexContext, editedProject) {
    return this.$axios
      .$put(
        'https://the-projects-project.firebaseio.com/projects/' +
          editedProject.id +
          '.json',
        editedProject
      )
      .then((res) => {
        vuexContext.commit('editProject', editedProject)
      })
  },
}

export const getters = {
  loadedProjects(state) {
    return state.loadedProjects
  },
}
