function used(a,b){
    console.log(a,b);
}


//functional expression

let used1= function(a,b){
    console.log(1,2);
}
used1(1,2);

//arrow function- ai fuction e return value na thakle ak line e lekha jai kono second bracket chara .r return thakle second brackt thakte hobe.second bracket diye return korle undefine dekhabe

// let used3= (a,b)=>console.log(1,2)

let used3= (a,b)=>{a*b;}
    

let usedMultiply=used3(2,3);
console.log(usedMultiply);

//default parameter
let used4= (a=3,b=8)=>a*b;
    

let usedMultiply1=used4(6);
console.log(usedMultiply1);