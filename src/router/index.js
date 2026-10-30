import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../Components/LandingPage.vue'
import About from '../Components/About.vue'
import Contact from '../Components/Contact.vue'
import Faqs from '../Components/Faqs.vue'
import Features from '../Components/Features.vue'
import Login from '../Components/Login.vue'
import Profile from '../Components/Profile.vue'
import SignUp from '../Components/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/faq',
      alias: ['/faqs'],
      component: Faqs,
    },
    {
      path: '/features',
      component: Features,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/signup',
      component: SignUp,
    },
  ],
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && localStorage.getItem('isAuthenticated') !== 'true') {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
})

export default router