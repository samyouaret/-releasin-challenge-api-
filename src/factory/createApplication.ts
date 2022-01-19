import Application from '../Application'
import ApplicationGateway from '../contracts/ApplicationGateway'
import { createHttpApp } from './createHttpServer'

export default function createRootApp (): ApplicationGateway {
  const appGateway = createHttpApp()
  const app = new Application({ appGateway })

  return app
}
