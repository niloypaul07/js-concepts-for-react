
//fetch
// const fetchUser=()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>{
//     // console.log(data);
//     throw new Error(e,"new error");
// }

// )
// .catch((e)=>console.log(e,'new error'));
// };
// fetchUser();
const fetchUser= async()=>{
    //loadind true
try{
    
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    throw new Error('Somthing wrong');
    const data=await res.json();
    console.log(data);
} catch (err){
   console.log(err.message,'wrong');
}finally{console.log('i am here')
    //loading false
};

};

fetchUser();