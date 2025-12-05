// key : value pair

let student1 = {
    name: "Neha Dhote",
    phone: 8767047184,
    address: "Nagpur",
    subjects: ["Math", "Java"]
}

let student2 = {
    name: "Trish pathe",
    phone: 9823825629,
    address: "pune",
    subjects: ["Science", "Java"],
    action: () => { alert ("hi !") }
}

// object.key

// console.log(student1.name) // Neha Dhote
// console.log(student1.phone) //8767047184
// console.log(student1.address) //Nagpur
// console.log(student1.subjects) //array

// console.log(student2.name) // Neha Dhote
// console.log(student2.phone) //9823825629
// console.log(student2.address) //Pune
// console.log(student2.subjects) //array

// student2.action()

let students = [
    student1, student2,
    {name: "Sahil Kumar", phone: 9075828642, address: "mumbai", subjects: ["English", "c++"] }
]

// Array of object

// for(let student of students){
//console.log(student1.name)
// }

// for (let key in student1) {
//  console.log(student.name)
// }

// // destructuring of array and objects

// let array = [1, 2, 3, 4]
// array[0]
// let object = { key1: "value1", key2: "value2" }

// let [a, b, c, d] = array

// console.log(a)
// console.log(b)

// console.log(array)
// console.log(...array)

// let numbers = [5, 6, 7, ...array]

// console.log(numbers)

// let { key1 } = object

// console.log(key)

// let { name } = student1

let response = {
    title: "title",
    status: true,
    output: [5, 4, 6]
}

function checkTask(response) {
     let { status, output } = response

     if (status) {
        console.log("checking output")

        let [op1, op2, op3] = output

        if (op1 == 1 && op2 == 2 &&  op3 == 3) {
            // console.log("you have completed the task successfully !")
            return true
        } else {
            // console.log("you have completed the task unsuccessfully !")
            return false 
        }
     } else {
        // console.log('task not completed !')
        return false
     }
}

console.log(checkTask(response))