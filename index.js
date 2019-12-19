// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(dObject, key, value) {
    const newDriver = { ...dObject };

    newDriver[key] = value;

    return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(dObject, key) {
    const newDriver = Object.assign({}, dObject);

    delete newDriver[key];

    return newDriver;
}

function destructivelyDeleteFromDriverByKey(dObject, key) {
    delete dObject[key];

    return dObject;
}