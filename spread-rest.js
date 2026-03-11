//rest

function restOperator(a,b,c,...rest){
    console.log(a,b,c,rest);
}
    restOperator(1,2,3,4,5);


    //spread
    let arr=[1,2,3,4];
    let arr2=[5,6,7,8];
    console.log(...arr);
    
    let arr3=[...arr,...arr2];
    arr.push(500);
    console.log(arr3);

    let person={
        name:'niloy',
        age:25
    };

    let computer={
        monitor: 'dell',
        ssdName:'transcend',
        graphicsCard:'256GB'
    };

    let allObj={
        ...person, ...computer

    };
    console.log(allObj);
    //spread operator notun array and array like object creat korte pari
    