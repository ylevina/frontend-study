console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));

function filterBy(inputArray, type) {
    let outputArray = [];
    inputArray.forEach(element => {
        if ((typeof element) !== type){
            outputArray.push(element);
        }            
    });

    return outputArray;
}