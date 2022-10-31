const Contenedor = require('./index')

async function main (){
    const products = new Contenedor('products.json')

    // ---prueba de getAll---
    const allProducts = await products.getAll()
    console.log(allProducts)
    // const algo = await products.getAll()
    // console.log(algo)
    // ---prueba de getAll---
    

    // ---prueba de deleteByid---
    // await products.deleteByid(1)

    // ---prueba de save---
    const newProduct = {
        name:"celular",
        price: 250000
    }
    await products.save(newProduct)
    // ---prueba de save---


    // ---prueba de deleteAll---
    // products.deleteAll()

    // ---prueba de getByID---
    // products.getById(5)
    // products.getById(5)
}
main()
