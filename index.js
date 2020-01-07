// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value});
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign( obj, { [key]:value }); 
};

function deleteFromDriverByKey(obj, key){
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;

};

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
};