import { createRouter, createWebHashHistory } from 'vue-router'
import CocktailList from '@/components/CocktailList'
import CocktailDetails from '@/components/CocktailDetails'
import SearchResults from '@/components/SearchResults'

const routes = [
  {
    path: '/',
    name: 'CocktailList',
    component: CocktailList
  },

  {
    path: '/details/:id',
    name: 'CocktailDetails',
    component: CocktailDetails
  },

  {
    path: '/search/:query',
    name: 'SearchResults',
    component: SearchResults
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router