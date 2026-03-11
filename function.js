function used(a,b){
    console.log(a,b);
}


//functional expression

let used1= function(a,b){
    console.log(1,2);
}
used1(1,2);

//arrow function- ai fuction e return value na thakle ak line e lekha jai kono second bracket chara .r return thakle second brackt thakte hobe

// let used3= (a,b)=>console.log(1,2)

let used3= (a,b)=>{
    return a*b;
}
let usedMultiply=used3(2,3);
console.log(usedMultiply);