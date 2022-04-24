class Producto{
    constructor(id,nombre,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        
    }
}

const producto1 = new Producto  ( 1,'BUZO MAX', 2000,'mujer-buzo.png');
const producto2 = new Producto ( 2, 'JEAN MONTANA',3500,'mujer-jean.png');
const producto3 = new Producto  ( 3, 'SACO CLARA',4200,'mujer-tapado.png');
const producto4 = new Producto ( 4, 'CAMPERA JAZ',5500,'mujer-camp.png');
const producto5 = new Producto ( 5,  'SWEATER JEN',2600,'mujer-swet.jpg');
const producto6 = new Producto ( 6, 'BLAZER MIRNA',3600,'mujer-blazer.jpg')

productosM=[producto1,producto2,producto3,producto4,producto5,producto6]