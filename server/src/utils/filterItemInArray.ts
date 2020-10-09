const filterItemInArray = (item: any, field: string, array: Array<any>) => {
  const items = array.filter(object => object[field] === item)

  return items[0]
}

export default filterItemInArray
