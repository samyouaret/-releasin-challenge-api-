
/**
 * 
 * @param obj1 object to search in
 * @param obj2 objet needle
 * @returns true of all obj2 properties found and equal to obj1
 * properties
 */
export function objectInclude (obj1: any, obj2: any): boolean {
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
  }
  return true
}

/**
 * 
 * @param arr list of objects
 * @param filter an object with properties to search
 * @returns filtered list
 */
export function filterList (arr: any[], filter: any): any[] {
  return arr.filter((obj) => {
    return objectInclude(obj, filter)
  })
}

/**
 * 
 * @param arr list of objects
 * @param filter an object with properties to search
 * @returns first element to match filter object
 */
export function First (arr: any[], filter: any): any {
  const one = arr.find((obj) => {
    return objectInclude(obj, filter)
  })
  if (one === undefined) {
    return null
  }

  return one
}
