import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Components/HomePage.vue'
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
      path: '/home',
      component: HomePage,
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
      path: '/faqs',
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
    },
    {
      path: '/signup',
      component: SignUp,
    },
  ],
})

export default router