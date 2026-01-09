// Array is used store multiple value or a collection of the data in the single variable.

// [] we usoing the squre bracket to dentote array


let mobiles=["oppo","vivo","iphone"]

console.log(mobiles[0])
console.log(mobiles[1])
console.log(mobiles[2])



// Let us discuss about the Array of object..

let student=[
    {name:"Arpit",age:20,grade:"A"},
    {name:"OM",age:20,grade:"B"},
    {name:"Sarthak",age:20,grade:"C"},
]

console.log(student[0].name)

// Array cann store multiple  values of data types 

let arr2=["Ram",2,{name:"Arpit"},[3,4,5]]

console.log(arr2[2].name)
console.log(arr2[3][1])



// arry exmaple 2

 let companies=[

    {
        name:"Hcl tech",
        employees:[
            {name:"Arpit Kahale",role:"Devloper"},
              {name:"Sarthak Kahale",role:"Tester"}
        ]
    }
    

 ]
 console.log(companies[0].employees[1].name)