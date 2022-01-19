import initiable from './Initiable'
import Startable from './Startable'

/**
 * Interface to be use by Root application to init
 * and start application gateway
 */
export default interface ApplicationGateway
  extends initiable, Startable { }
