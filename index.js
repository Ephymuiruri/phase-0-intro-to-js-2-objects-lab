// Write your solution in this file!
const employee ={
    name:'ephy',
    streetAddress:'58 hamptons'
}
console.log(Object.keys(employee))

function updateEmployeeWithKeyAndValue(employee,key,value,){
const newEmployee = {...employee}
    newEmployee[key]=value
console.log(newEmployee)
return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee2 = {...employee}
    delete newEmployee2[key]
    return newEmployee2
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
   delete employee[key]
    return employee
}
