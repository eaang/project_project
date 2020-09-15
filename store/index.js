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
  deleteProject(state, deletedProject) {
    const projectIndex = state.loadedProjects.findIndex(
      (project) => project.id === deletedProject.id
    )
    state.loadedProjects.splice(projectIndex, 1)
  },
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    const projectArray = []
    await this.$axios
      .$get('https://the-projects-project.firebaseio.com/projects.json')
      .then((res) => {
        for (const key in res) {
          projectArray.push({ ...res[key] })
        }
      })
      .then(() => {
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
    const createdProject = {
      ...project,
      createdOn: new Date(),
      updatedOn: new Date(),
      id: projectId,
    }
    return this.$axios
      .$put(
        'https://the-projects-project.firebaseio.com/projects/' +
          projectId +
          '.json',
        createdProject
      )
      .then((res) => {
        vuexContext.commit('addProject', { ...createdProject })
      })
  },
  async editProject(vuexContext, editedProject) {
    editedProject.updatedOn = new Date()
    const editedProjectId = editedProject.name
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\s+/g, '-')
      .toLowerCase()
    if (editedProjectId !== editedProject.id) {
      await vuexContext.dispatch('deleteProject', editedProject)
      editedProject.id = editedProjectId
      return vuexContext.dispatch('addProject', editedProject)
    } else {
      return this.$axios
        .$put(
          'https://the-projects-project.firebaseio.com/projects/' +
            editedProjectId +
            '.json',
          editedProject
        )
        .then((res) => {
          vuexContext.commit('editProject', editedProject)
        })
    }
  },
  deleteProject(vuexContext, deletedProject) {
    return this.$axios
      .$delete(
        'https://the-projects-project.firebaseio.com/projects/' +
          deletedProject.id +
          '.json',
        deletedProject
      )
      .then((res) => {
        vuexContext.commit('deleteProject', deletedProject)
      })
  },
}

export const getters = {
  loadedProjects(state) {
    return state.loadedProjects
  },
  latestProjects(state) {
    return state.loadedProjects
      .slice()
      .sort((a, b) => Date.parse(b.createdOn) - Date.parse(a.createdOn))
      .slice(0, 4)
  },
}
