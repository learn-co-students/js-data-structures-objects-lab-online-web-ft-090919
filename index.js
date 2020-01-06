// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
 return Object.assign({}, driver,{ [key] : value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver,{ [key] : value })
}

function deleteFromDriverByKey(driver, key) {
  let stateDriver = Object.assign([], driver)
  delete stateDriver[key]
  return stateDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  let stateDriver = driver
  delete stateDriver[key]
  return stateDriver
}

