import express from 'express'

const app = express()

const PORT = 8080

app.use(express.urlencoded({extended:true}))

const productsArray = [{
    id:"1",
    title: 'mouse',
    description: 'ryzen',
    price: 25,
    picture: 'insert pic',
    stock: 10
},{
    id:"2",
    title: 'keyboard',
    description: 'ryzen',
    price: 20,
    picture: 'insert pic',
    stock: 15
},{
    id:"3",
    title: 'speaker',
    description: 'sony',
    price: 200,
    picture: 'insert pic',
    stock: 11
},{
    id:"4",
    title: 'television',
    description: 'sony',
    price: 250,
    picture: 'insert pic',
    stock: 14
},{
    id:"5",
    title: 'celular',
    description: 'iphone',
    price: 800,
    picture: 'insert pic',
    stock: 9
},{
    id:"6",
    title: 'celular',
    description: 'samsung',
    price: 500,
    picture: 'insert pic',
    stock: 20
},{
    id:"7",
    title: 'headphone',
    description: 'samsung',
    price: 50,
    picture: 'insert pic',
    stock: 7
},{
    id:"8",
    title: 'headphone',
    description: 'JBL',
    price: 80,
    picture: 'insert pic',
    stock: 8
},{
    id:"9",
    title: 'speaker',
    description: 'JBL',
    price: 200,
    picture: 'insert pic',
    stock: 100
},{
    id:"10",
    title: 'bluetooth speaker',
    description: 'JBL',
    price: 300,
    picture: 'insert pic',
    stock: 14
}]

app.get('/saludo', (req, res)=>{
    res.send('hola saludos para todos')
})

app.get('/products', (req, res)=>{
    res.send(productsArray)
})
app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    const producto = productsArray.find(producto=>producto.id===id)
    if(!producto) return res.send('no existe el producto')
    res.send(producto)


})

app.get('/query',(req,res)=>{
    res.send('query')
})

app.get('/params/:nombre/:id',(req,res)=>{
    console.log(req.params)
    const {nombre,id}=req.params

    res.send({
        nombre,
        id
    })
})





app.listen(PORT, err=>{
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`);
})