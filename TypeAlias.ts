
// type alisa object 
type UserType={
    name:string;
    age:number;
    city:string;
    salary:number;
}


const userInfo:UserType={
    name:'sawon',
    age:26,
    city:'kushtia',
    salary:25000,
}

console.log('userInfo',userInfo)

// type alias Array type defined option-1
// type  NumberArray=[number,number,number]
// options two type defined
type NumberArray=number[]
const marks:NumberArray=[10.20,40,50]

console.log(marks)


// //  function defined type alias option 1

// type SumFn=(arg1:number,arg2:number)=>number;

// const sumFN:SumFn=(number1,number2)=> number1 + number2;
// //  function defined type alias option 2
// const sumFN=(number1:number,number2:number):number=> number1 + number2;

// console.log(sumFN(10,20))


// function defined type alias option 2

type Input=number | string | undefined
const typeofFn=(input1:Input)=>{
    if(typeof input1==='string')
    {
         return `User input value: ${input1}` 
    }
    else if(typeof input1==='number')
    {
         return `User Input Value: ${input1}`
    }
    else{
    
        return  `User Input Value: ${input1}`
    }
}

console.log(typeofFn(10)) 
console.log(typeofFn('sawon'))
console.log(typeofFn(''))