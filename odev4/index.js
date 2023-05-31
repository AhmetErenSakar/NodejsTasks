const fs = require('fs')

//odev 1 
/*
fs.writeFile('employees.json', '{ "name": "Employee 1 Name", "salary": 2000 }', 'utf8', (err) => {
    if (err) {
        console.log(err)
    }
})
*/

//odev 2 
/*
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
*/

//odev 3 
/*
fs.appendFile('employees.json', '\n {"deneme1": "hello"}', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
})
*/

//odev4
fs.unlink('employees.json', (err) => {
    if (err) {
        console.log(err)
    }
})