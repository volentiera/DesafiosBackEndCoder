
const { promises: fs } = require('fs')

class Contenedor {
    constructor(route) {
        this.route = route
    }

    async getAll(){
        try {
            const content = JSON.parse(await fs.readFile(`./${this.route}`,'utf-8'))
            return content
        } catch (error) {
        console.log(error)
        return []
        }
    }

    async deleteByid(id){
        
        try {
            const content = await this.getAll()
            const elementoFiltrado = content.filter(e => e.id !== id)
            await fs.writeFile(`./${this.route}`, JSON.stringify(elementoFiltrado, null, 2))
        } catch (error) {
            console.log(error)
        }
    }

    async save(newProduct){
        try {
            const content = await this.getAll()
            const lastId = content[content.length - 1]
            if (lastId === undefined){
                const newProductFromCero = {
                    id: 1,
                    name: newProduct.name,
                    price: newProduct.price
                }
                await content.push(newProductFromCero)
            }else{
                
                const newProductCompleted = {
                    id: (lastId.id +1),
                    name: newProduct.name,
                    price: newProduct.price
                }
                await content.push(newProductCompleted)
            }
            await fs.writeFile(`./${this.route}`, JSON.stringify(content, null, 2))
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll(){
        const emptyArray = []
        await fs.writeFile(`./${this.route}`, JSON.stringify(emptyArray, null, 2))
    }
    async getById(id){
        const content = await this.getAll()
        const filteredObject = await content.filter(e => e.id === id)

        const isEmpty = Object.keys(filteredObject).length === 0;

        if (!isEmpty){
            const filteredObject = await content.filter(e => e.id === id)
            await fs.writeFile(`./searchById${id}${this.route}`, JSON.stringify(filteredObject, null, 2))
        }else {
            console.log("id no encontrado")
        }
    
    }
    
}

module.exports = Contenedor