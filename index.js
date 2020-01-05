// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // Below lines are doing same thing as line 12
  // I don't know which I like better
  
  // const newDriver = { ...driver };
  // newDriver[key] = value;
  
  const newDriver = Object.assign({}, driver, { [key]: value });
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  // below line is alternative to line 25
  // const newDriver = { ...driver };
  
  const newDriver = Object.assign({}, driver);
  
  // curriculum provides 'delete' syntax as 'delete object.key'
  // 'delete object.key' doesn't pass, but 'delete object[key]' does. Why?
  
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}