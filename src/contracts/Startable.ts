/**
 * Interface to implement when contracting with something startable
 * like Http servers, databases, Root application
 */
export default interface Startable {
  start: () => Promise<any>
}
