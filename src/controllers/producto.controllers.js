import Producto from "../models/producto";

const productoCtrl ={};

//logica para obtener la lista de productos
productoCtrl.listarProductos = async(req,res)=>{
       try{
        //crear un arreglo con todos los productos
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);
       }catch(error){
           console.log(error);
           res.status(404).json({mensaje:'no se pudo obtener el listado de productos'})
       }
}

productoCtrl.borrarProducto = (req, res)=>{
    res.send('aqui borro los productos')
}

productoCtrl.crearProducto = async(req, res)=>{
    // console.log(req.body);
    try{
        //validar
        //crear un nuevo objeto para guardar en la BD
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        });
        // guardar producto en BD
        await productoNuevo.save();
        //enviar la respuesta
        res.status(201).json({
            mensaje: 'Producto agregado correctamente'
        })
    }catch(error){
        console.log(error);
        //enviar codigo de error
        res.status(400).json({
            mensaje:'Error al agregar un producto'
        })
    }
}

export default productoCtrl