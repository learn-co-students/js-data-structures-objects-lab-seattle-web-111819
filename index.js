// Write your solution in this file!

// Assign driver variable to an Object
const driver = {};

// This function SHOULD NOT MUTATE the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
    /* 1) returns a driver with the original key value pairs and the new key value pair
    2) it does not modify the original driver, but rather returns a clone with the new data*/
}

// This function SHOULD MUTATE the driver and should return a new driver that has an updated value for the key passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
    /* updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver */
}

// This function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This SHOULD NOT MUTATE the driver passed in.

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
    /* 1) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    2) does not modify the original driver (it is non-destructive) */
}

// This function should work the same as deleteFromDriverByKey() but it SHOULD MUTATE the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
    /* 1) returns driver without the delete key/value pair
      2) modifies the original driver */
}