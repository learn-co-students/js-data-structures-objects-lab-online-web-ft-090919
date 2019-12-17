// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
 return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
 return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key){
  const clone = Object.assign({}, driver)
  delete clone[key];
  return clone
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
