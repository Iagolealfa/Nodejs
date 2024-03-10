type Product = {
    title: string,
    price : number
}

const data: Product[] = [
    {title : 'Pizza de frango', price : 50},
    {title : 'Pizza de calabresa', price : 45},
    {title : 'Pizza de mussarela', price : 40},
    {title : 'Pizza de portuguesa', price : 43}
]

export const Product = {
    getAll: () : Product[] => {
        return data;
    },
    getPriceAfter : (price : number) : Product[]=> {
        return data.filter(item  => item.price >= price);
    }
}