/**
 * This Interface should be implemented by storage like database,
 * InMemory storage, file storage etc.
 */
export default interface StoreInteface {
  findOne: (filter: any) => Promise<any>
  findMany: (filter?: any) => Promise<any[]>
}
