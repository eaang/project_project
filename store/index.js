export const state = () => ({
  loadedProjects: [],
  token: null,
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
  setToken(state, token) {
    state.token = token
  },
  clearToken(state, token) {
    state.token = null
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
  authenticateUser(vuexContext, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'
    authData.isLogin
      ? (authUrl =
          authUrl + 'signInWithPassword?key=' + process.env.FIREBASE_API)
      : (authUrl = authUrl + 'signUp?key=' + process.env.FIREBASE_API)
    return this.$axios
      .$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((result) => {
        vuexContext.commit('setToken', result.idToken)
        localStorage.setItem('token', result.idToken)
        localStorage.setItem(
          'tokenExpiration',
          new Date().getTime() + result.expiresIn * 1000
        )
        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
      })
  },
  setLogoutTimer(vuexContext, duration) {
    setTimeout(() => {
      vuexContext.commit('clearToken')
    }, duration)
  },
  initAuth(vuexContext) {
    const token = localStorage.getItem('token')
    const expirationDate = localStorage.getItem('tokenExpiration')

    if (new Date().getTime() > expirationDate || !token) {
      return
    }
    vuexContext.commit('setToken', token)
    vuexContext.dispatch(
      'setLogoutTimer',
      expirationDate - new Date().getTime()
    )
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
          '.json?auth=' +
          vuexContext.state.token,
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
            '.json?auth=' +
            vuexContext.state.token,
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
          '.json?auth=' +
          vuexContext.state.token,
        deletedProject
      )
      .then((res) => {
        vuexContext.commit('deleteProject', deletedProject)
      })
  },
}

export const getters = {
  loadedProjects(state) {
    const alphabeticalOrder = state.loadedProjects
      .slice()
      .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

    return alphabeticalOrder
  },
  latestProjects(state) {
    return state.loadedProjects
      .slice()
      .sort((a, b) => Date.parse(b.createdOn) - Date.parse(a.createdOn))
      .slice(0, 4)
  },
  loggedIn(state) {
    return state.token != null
  },
}
