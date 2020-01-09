let driver = {}

function updateDriverWithKeyAndValue(driver, k, v) {
    let newDriver = Object.assign({}, driver);
    newDriver[`${k}`] = v;
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, k, v) {
    driver[`${k}`] = v;
    return driver;
};

function deleteFromDriverByKey(driver, k) {
    let newDriver = Object.assign({}, driver);
    delete newDriver[`${k}`];
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, k) {
    delete driver[`${k}`];
    return driver;
};