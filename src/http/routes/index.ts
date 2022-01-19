import error404 from './404'
import error500 from './500'
import logger from './logger'
import productRoutes from './product'
import rootRoutes from './root'
import swaggerRoute from './swagger'

/**
 * All routes loaders should be put here
 * to get loaded by httpGatway
 * loaders will be called in the defined order
 */
const routes = [
  rootRoutes,
  logger,
  productRoutes,
  swaggerRoute,
  error404,
  error500,
]

export default routes
