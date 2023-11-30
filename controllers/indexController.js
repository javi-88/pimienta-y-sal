 const productos = [
    {
        id: 1,
        nombre:"Carpaccio fresco",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:"",
        imagen:"Carpaccio-de-salmon.jpg"
    },
    {
        id: 2,
        nombre:"Risotto de berenjena",
        descripcion:"Risotto de berenjena y queso de cabra",
        precio:"",
        imagen:"Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id: 3,
        nombre:"Mousse de arroz",
        descripcion:"Moussee de arroz con leche y aroma de azahar",
        precio:"",
        imagen:"Mousse-de-arroz-con-leche.jpg"
    },
    
    {
        id: 4,
        nombre:"Espárragos blancos",
        descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio:"",
        imagen:"esparragos.png"
    },
    {
        id: 5,
        nombre:"milanesa con pure",
        descripcion:"Plato tipico",
        precio:"",
        imagen:"milanesas.webp"
    },
    
    {
        id: 6,
        nombre:"revuelto de gramajo",
        descripcion:" hecho con solamente 3 ingredientes:papas,huevos y jamon",
        precio:"",
        imagen:"revuelto.jpeg"
    },
    {
        id: 7,
        nombre:"asado",
        descripcion:"Plato tipico",
        precio:"",
        imagen:"Image-not-found.png"
    },
     ]

const indexController ={
    home:(req,res) =>{
        res.render("home",{title:"sal",productos})
    },


detalle:(req,res) =>{
    const { id } = req.params;
    res.render("detalle",{title:"sal",productos});
    const producto = productos.find((producto) => producto.id ==id);
    res.render("detalle", {  title: producto.nombre,producto});
},
};

module.exports = indexController;


