// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // non destructive method
  // return a new driver with updated value for the key passed in
  const newDriver = {...driver}
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // same as above but should mutate driver parameter
  driver[key]= value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  // take in driver object and key
  // delete key/value pair for the key passed in from driver object
  // non destructively mutate
  const newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  //same as above but SHOULD mutate the driver passed in
  // dot notation vs bracket notation
  delete driver[key]
  return driver
}