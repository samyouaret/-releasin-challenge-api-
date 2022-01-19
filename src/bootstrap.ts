require('dotenv').config();
import { services } from './app/services'
import Application from './Application'
import { createHttpApp } from './factory/createHttpServer'

/**
 * @description A function to init and start the application
 */
export async function bootstrap(): Promise<void> {
  const appGateway = createHttpApp()
  const app = new Application({ appGateway }, services)
  await app.init()
  await app.start()
}
