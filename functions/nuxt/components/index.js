export { default as TheAdminHeader } from '../../components/Navigation/TheAdminHeader.vue'
export { default as TheFooter } from '../../components/Navigation/TheFooter.vue'
export { default as TheHeader } from '../../components/Navigation/TheHeader.vue'
export { default as TheSidenav } from '../../components/Navigation/TheSidenav.vue'
export { default as TheSidenavToggle } from '../../components/Navigation/TheSidenavToggle.vue'
export { default as HeroSection } from '../../components/Shared/HeroSection.vue'
export { default as ProjectCard } from '../../components/Shared/ProjectCard.vue'
export { default as ProjectEditForm } from '../../components/Shared/ProjectEditForm.vue'
export { default as ProjectList } from '../../components/Shared/ProjectList.vue'

export const LazyTheAdminHeader = import('../../components/Navigation/TheAdminHeader.vue' /* webpackChunkName: "components/Navigation/TheAdminHeader" */).then(c => c.default || c)
export const LazyTheFooter = import('../../components/Navigation/TheFooter.vue' /* webpackChunkName: "components/Navigation/TheFooter" */).then(c => c.default || c)
export const LazyTheHeader = import('../../components/Navigation/TheHeader.vue' /* webpackChunkName: "components/Navigation/TheHeader" */).then(c => c.default || c)
export const LazyTheSidenav = import('../../components/Navigation/TheSidenav.vue' /* webpackChunkName: "components/Navigation/TheSidenav" */).then(c => c.default || c)
export const LazyTheSidenavToggle = import('../../components/Navigation/TheSidenavToggle.vue' /* webpackChunkName: "components/Navigation/TheSidenavToggle" */).then(c => c.default || c)
export const LazyHeroSection = import('../../components/Shared/HeroSection.vue' /* webpackChunkName: "components/Shared/HeroSection" */).then(c => c.default || c)
export const LazyProjectCard = import('../../components/Shared/ProjectCard.vue' /* webpackChunkName: "components/Shared/ProjectCard" */).then(c => c.default || c)
export const LazyProjectEditForm = import('../../components/Shared/ProjectEditForm.vue' /* webpackChunkName: "components/Shared/ProjectEditForm" */).then(c => c.default || c)
export const LazyProjectList = import('../../components/Shared/ProjectList.vue' /* webpackChunkName: "components/Shared/ProjectList" */).then(c => c.default || c)
