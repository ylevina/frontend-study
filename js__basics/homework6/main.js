console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));

function filterBy(inputArray, type) {   
    return inputArray.filter(element => typeof element!== type)
}