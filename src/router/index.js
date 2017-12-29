import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Portfolio from '@/components/portfolio/Portfolio'
import PortfolioDetail from '@/components/portfolio/PortfolioDetail'
import Blog from '@/components/blog/Blog'
import BlogDetail from '@/components/blog/BlogDetail'
import PageDetail from '@/components/pages/PageDetail'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/detail/:slug', // how to wildcard route?
      component: PortfolioDetail
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/detail/:year/:month/:day/:slug',
      component: BlogDetail
    },
    {
      path: '/pages/:slug',
      component: PageDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
