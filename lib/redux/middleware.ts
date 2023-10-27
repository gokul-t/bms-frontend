/* Core */
import { createLogger } from 'redux-logger'
import { bookApi } from './services'

const middleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
    predicate: () => typeof window !== 'undefined',
  }),
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  bookApi.middleware
]

export { middleware }
