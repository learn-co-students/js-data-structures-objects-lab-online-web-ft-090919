// Write your solution in this file!


let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {

    let newDriver = { ...obj }

    newDriver[key] = value

    return newDriver

}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {

    obj[key] = value 

    return obj 

}

function deleteFromDriverByKey(obj, key) {

    let newDriver = { ...obj }

    delete newDriver[key]

    return newDriver 

}

function destructivelyDeleteFromDriverByKey(obj, key) {

    delete obj[key]

    return obj

}


