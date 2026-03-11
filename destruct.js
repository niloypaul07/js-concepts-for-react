const arr=[1,2,3,4,5,6];
let[a,b,c, ,e]=arr;
console.log(a,b,c,e);


const obj={
    name: 'niloy',
    age:30,
    address:{
        street:44/1,
        location:{
            district:'dhaka',
            cityCorporation:'south'

        }


    }
};

let{
    name,age,address:{location:{cityCorporation},}
}=obj;

console.log(name,age,cityCorporation);