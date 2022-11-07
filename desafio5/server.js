const express = require('express')
const morgan = require('morgan');
const routeProducts = require('./routes/productRoutes');
const path = require('path');
const app = express()
const PORT = 8081

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(__dirname + '/public'))
app.set('views',path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');


app.use('/api/products', routeProducts);
app.get('/', (req, res) => {
    res.redirect('/api/products');
}
);

const server = app.listen(PORT, () =>
    console.log(
        `Server started on PORT http://localhost:${PORT} at ${new Date().toLocaleString()}`
    )
);

server.on('error', (err) =>{
    console.log('Error en el servidor:', err)
})

// router.get('/api/productos', async (req,res) => {
//     try {
//         const allProducts = await path.getAll()
//         res.json(allProducts)
        
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.get('/api/productos/:id', async (req,res) => {
//     try {
//         const newId = Number(req.params.id)
//         const productById = await path.getById(newId)
//         const productNotFound = {error: 'Producto no encontrado'}
//         if (productById !== undefined){
//             res.json(productById)
//         } else {
//             res.json(productNotFound)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.post('/api/productos', async (req,res)=>{
//     try {
//         const producto = {name: req.body.name, price: Number(req.body.price) }
//         const newProduct = await path.save(producto)
//         const allProducts = await path.getAll()
//         res.json(allProducts)
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.delete('/api/productos/:id', async (req,res)=>{
//     try {
//         const id = Number(req.params.id)
//         const elementDeleted = await path.deleteByid(id)
//         res.json(elementDeleted)
//     } catch (error) {
//         console.log(error)
//     }
// })
// router.put('/api/productos/:id', async (req,res)=>{
//     try {
//         const id = Number(req.params.id)
//         const modifyProduct = await path.modifyProductById(id, (req.body))
//         res.json(modifyProduct)
//     } catch (error) {
//         console.log(error)
//     }
// })

