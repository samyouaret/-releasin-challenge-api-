import { Express } from 'express'
import Application from '../Application'
import initiable from '../contracts/Initiable'
import Startable from '../contracts/Startable'
import routes from './routes'

interface ExpressConfig {
  port: number | string
  host: string
}

class HttpServerGateway implements initiable, Startable {
  private readonly config: ExpressConfig
  private readonly server: Express
  private context: Application

  constructor(server: Express, config: ExpressConfig) {
    this.config = config
    this.server = server
  }

  /**
  * @description An initial method to load ServerGateway routes
  */
  async init(context: Application): Promise<any> {
    console.log('initiating Http server')
    this.context = context
    await this.loadRoutes(this.context)
  }

  /**
   * @private
   * @description loading http routes
  */
  private async loadRoutes(application: Application): Promise<void> {
    for (const route of routes) {
      let router = await route(application)
      if (router !== undefined) {
        this.server.use(router)
      }
    }
  }

  /**
  * A method to get the server instance 
  * @return server instance
  */
  getServer(): Express {
    return this.server
  }

  /**
  * @description A method to start ServerGateway and http server
  */
  async start(): Promise<any> {
    console.log('starting Server')
    this.server.listen(this.config.port, () => {
      console.log(`server listening ⚡️ at ${this.config.host}:${this.config.port}`)
    })
  }
}

export default HttpServerGateway
