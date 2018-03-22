export const getArrID = function (array) {
  let ARRID = []
  array.forEach((item) => {
    ARRID.push(item.id)
  })
  return ARRID
}

export const getObjectData = function (array) {
  let ObjectData = {}
  array.forEach(item => {
    ObjectData[item.id] = item
  })
  return ObjectData
}
