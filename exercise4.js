
function valuePair(obj){
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;

}

const person = {
    firstName: "stephen",
    lastName: "Godwin",
    age: 35,
    email:"stevoly1@gmail.com"
};

console.log(valuePair(person));