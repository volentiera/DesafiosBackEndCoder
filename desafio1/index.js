class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return (`Nombre: ${this.nombre}, Apellido: ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return (`Usted tiene: ${this.mascotas.length} mascotas`)
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        const bookNames = []
        for (let i = 0; i < this.libros.length ;i++){
            bookNames.push(this.libros[i].nombre)
        }
        return bookNames
        
    }
}

const usuario = new Usuario("Santiago", "Volentiera", [], [])

console.log(usuario.getFullName())

usuario.addMascota("Charly")
usuario.addMascota("Olivia")
usuario.addBook("Algo", "Alguien")
usuario.addBook("hola", "Chau")

console.log(usuario)

console.log(usuario.countMascotas())
console.log(usuario.getBookNames())

