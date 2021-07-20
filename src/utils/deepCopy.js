const deepCopy = (plainObj) => {
    let keys = Object.keys(plainObj)
    let objCopy = {...plainObj}
    for (let key of keys) {
        if (plainObj[key] != null) {
            if (typeof plainObj[key] === "object") {
                objCopy[key] = deepCopy(plainObj[key])
            }
        }
    }

    return objCopy
}