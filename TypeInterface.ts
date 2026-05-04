// option 1
interface UserInfo{
   name:string;
   age:number;
   id:number;
   city:string;
   DepartMent:string;

}


const userinfo:UserInfo={
    name:'MD AL jihad sawon',
    age:26,
    id:123,
    city:'kushtia',
    DepartMent:'Cse',
}

console.log('userInfo',userinfo)

// option 2


interface Add{
       (a:number,b:number):number
}


const add:Add=(a,b)=>{

    return a +b
}

console.log(add(10,40))


// option 3 optional interface

interface Subject{
    dataStructure:string;
    algorithm:string;
    dataMangeMent:string;
    java:string;
    python?:string
}


const subject:Subject={
    dataStructure:'stack , queue, LinkList',
    algorithm:'bfs,dfs,binarysearch',
    dataMangeMent:'sql,RelationDB,noSql',
    java:'4 oop Plears',

}

console.log(subject)