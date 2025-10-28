import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import NotFound from '@/components/NotFound.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: DefaultLayout,
      children: [
        { path: '', component: HomePage, name: 'Home' },
        { path: '/projects', component: ProjectsPage, name: 'Projects' },
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ],
})

export default router
