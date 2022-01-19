import ApplicationGateway from './contracts/ApplicationGateway'
import initiable from './contracts/Initiable'
import ServiceContract from './contracts/ServiceContract'
import Startable from './contracts/Startable'

interface ApplicationConfig {
  appGateway: ApplicationGateway
}

type ServiceList = { [key: string]: ServiceContract };

class Application implements initiable, Startable {
  private readonly appGateway: ApplicationGateway
  private readonly config: ApplicationConfig
  private readonly services: ServiceList;

  constructor(config: ApplicationConfig, services?: ServiceList) {
    this.appGateway = config.appGateway
    this.config = config
    this.services = services || {};
  }

  registerService(key: string, service: ServiceContract) {
    this.services[key] = service;
  }

  /**
     * An initial method to init application services
     * any initial setup could be done here
  */
  async initServices(): Promise<any> {
    for (const key in this.services) {
      if (this.services[key].init !== undefined) {
        console.log(`initiating "${key}" service`)
        await (this.services[key] as any).init(this);
      }
    }
  }

  /**
  * A starter method to start application services.
  */
  async startServices(): Promise<any> {
    for (const key in this.services) {
      console.log(`Starting "${key}" service`)
      await this.services[key].start();
    }
  }

  getService(name: string): ServiceContract {
    return this.services[name];
  }

  getAppGateway(): ApplicationGateway {
    return this.appGateway
  }

  /**
     * An initial method to init application gateway
     * any initial setup could be done here
     */
  async init(): Promise<any> {
    console.log('init application')
    await this.initServices();
    await this.appGateway.init(this)
  }

  /**
  * A starter method to start application, and the application gateway
  */
  async start(): Promise<any> {
    console.log('start application')
    await this.startServices()
    await this.appGateway.start()
  }
}

export default Application
