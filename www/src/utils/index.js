

export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function isNumber(input) {
  input = parseFloat(input)
  return !Number.isNaN(input) && Number.isFinite(input)
}


export function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
    return v.toString(16)
  });
}

export function generateDateTime(date = new Date()) {

  return [date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()].join('')
}

export function generateDate(date = new Date()) {
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('')
}

export function mergeObjects(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key]
  }
  return obj1
}
