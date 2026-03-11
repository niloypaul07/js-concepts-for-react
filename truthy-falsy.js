//falsy value- false,0,[],NaN,null,undefined
//trithy value- falsy value gula bad diye sob e truthy value


if(1){
    console.log('if blocked triggered');
}
else{
console.log('else block triggered')
}
//akhane Nan false return kore .jehetu 5*'niloy NaN tai ata falsy value and seta if block e na dukhe else block e dukse.baki sob truthy value

let arr= [1,3,4,5]

let sixExistingArray= arr.find(element=>element==4)

if(sixExistingArray){
    console.log('six is find')
}
else{
    console.log('six not find')
}