


let arrayCarrito = []
if(localStorage.getItem("carritokey")){
    arrayCarrito = JSON.parse(localStorage.getItem("carritokey"))
}



const renderCarrito = () =>{
    let acumulador = ""
    if(arrayCarrito !== []){
        //items filas del carrito//
        arrayCarrito.forEach(el=>{
         acumulador+= `<tr >
                        <th scope="row" >${el.id} </th>
                        <td >${el.nombre}</td>
                        <td >$${el.precio}</td>
                        <td >${el.cantidad}</td>
                        <td ><button  onclick="restarCantidad(${el.id})" type="button" class="btn btn-outline-danger ">x</button></td>
                       <td <button onclick="borrarDelCarrito(${el.id})" class="btn "><img src="img/tacho.jpg" alt=""></button></td>
                        </tr> `
        })
    }
    ventanaCarrito.innerHTML = acumulador 
}



const agregarCarrito = id =>{
    
    let seleccion = productosM.find(el => el.id === id)

    let existe = arrayCarrito.find(el => el.id ===id)
     
    if(!existe ){
        arrayCarrito.push(
            {id:seleccion.id,
            nombre:seleccion.nombre,
            precio:seleccion.precio,
            imagen:seleccion.img,
            cantidad: 1
        })

    }else{
           
        let index = arrayCarrito.findIndex(el=>el.id===id)
        arrayCarrito[index].cantidad += 1 
        
    }
      
    localStorage.setItem("carritokey",JSON.stringify(arrayCarrito))
    
   renderCarrito()
   totalCarrito()

}

  
   
  //funcion disminuir cantidad producto//
const restarCantidad= (id)=>{
     let index = arrayCarrito.findIndex(el=>el.id== id)
   let cantidad = arrayCarrito[index].cantidad
   
     if(cantidad >=1){
   arrayCarrito[index].cantidad += -1
   renderCarrito()
      totalCarrito()
   }
   
}



    //funcion total carrito//

function totalCarrito() {
                    
  let totalCuenta = 0

                   for(const producto of arrayCarrito){
                     totalCuenta+= producto.precio* producto.cantidad
                  }
     
                 montoTotal.innerHTML=totalCuenta
                  
  }

                   
//funcion limpiar producto//

botonCarrito.addEventListener("click",renderCarrito)

const borrarDelCarrito= (id)=>{
    const aux = arrayCarrito.filter(el => el.id !== id)

    arrayCarrito = aux
    localStorage.setItem("carritokey",JSON.stringify(arrayCarrito)) //guardo en la key carrito el array carrito//

   
    renderCarrito()
    totalCarrito()
}

