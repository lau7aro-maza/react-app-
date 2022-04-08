const products = [
    {
        id: 1,
        name: "Lautaro - Maza",
        description: "Un simple humano",
        price: 1.000000,
        stock: 1,
    },
    {
        id: 2,
        name: "Claudio - Tapia",
        description: "jugador peruano (?",
        price: 1500000,
        stock: 1,
    },
    {
        id: 3,
        name: "Emanuel - Mendez",
        description: ":v",
        price: 500.000,
        stock: 1,
    },
];

export const customFetch = new Promise ((resolve, reject)=> {
    let condition = true;
    if (condition) {
        setTimeout (() => {
            resolve(products);
        }, 3000);
    } else {
        reject(console.log("Error"));
    }
});

export default customFetch;
