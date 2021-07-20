const deepCopy = (plainObj) => {
    let keys = Object.keys(plainObj)
    // if array - make array)
    let objCopy = null;
    if (Array.isArray(plainObj)) {
        objCopy = [...plainObj]
    } else {
        objCopy = {
            ...plainObj
        }
    }
    for (let key of keys) {
        if (plainObj[key] != null) {
            if (typeof plainObj[key] === "object") {
                objCopy[key] = deepCopy(plainObj[key])
            }
        }
    }

    return objCopy
}

export default deepCopy;