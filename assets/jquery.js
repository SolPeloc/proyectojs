
 $(()=>{ 
   
     const renderTienda= (array) =>{
     let acumulador = ""
         array.forEach(item=>{
         acumulador += `
                    <div class="card productoEstilo " style="width: 18rem;">
                        <img src="img/${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text ">Precio: $${item.precio}</p>
                            <a href="#" onclick='agregarCarrito(${item.id})'class="btn btn-primary btnCard ">Agregar al carrito</a>
                        </div>
                     </div>`
})
contenedorProdCar.innerHTML = acumulador
 }

 

const URLJSON = "datos/productos.json"
    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado === "success") {
            let datos = respuesta.productosM;
            if (datos) {
                renderTienda(datos)
                }

}

})



         //BIENVENIDA A TIENDA//

  $("#containers").css("display","none")
  $("#bienvenidos").fadeOut(4000,
    
    ()=>{
        
        $("#containers").fadeIn(3000)
        $(".container").addClass("animate__animated animate__bounceIn")
 })



})





