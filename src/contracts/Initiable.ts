/**
 * Interface to implement when needs to init something
 * eg. the serverGateway can load controllers before it can starts
 * same for application may neeed to load confguration, database setupe
 * before it can start
 */
export default interface initiable {
  init: (context?: any) => Promise<any>
}
