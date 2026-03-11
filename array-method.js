//map,filter,find,reduce

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    brand: "Dell"
  },
  {
    id: 2,
    name: "Mobile",
    price: 500,
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Headphone",
    price: 100,
    brand: "Sony"
  }
];

const productLIst= products.map((pd)=>pd.price>100 ?{
    ...pd,isExpensive: true}:{...pd,isExpensive: false}

);

console.log(productLIst);