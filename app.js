//Bienvenido al MUNDO DEL CELULAR
// Imprimimos la Fecha de la Compra

const hoy = new Date()
console.log( hoy.toLocaleDateString() )

//Dom
//Creamos la clase junto con el constructor del producto

class Celular {
    constructor(modelo, descripcion, precio,img) {
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
        this.img= img
    }
    
}
//Creamos la informacion de cada uno de los celulares disponibles

const celular1= new Celular("Samsung Galaxy A12", "Ranura SIM: Dual SIM, RAM: 4 Gb, Memoria Interna: 128 Gb, Sistema operativo: Android, Tamaño de la pantalla: 6.5 inch, Tipo Procesador: MediaTek Helio P35, Frecuencia Procesador: 1.8 GHz, Numero de cámaras: 4, Capacidad de la batería: 5,000 mAh", 60000, "./img/samsung-galaxy-a12-128gb.webp")
const celular2= new Celular("Nokia 23 M 32 GB 2 GB Ram", "Dispositivo liberado para que elijas la compañía telefónica que prefieras, Pantalla de 6.2 ,Tiene 2 cámaras traseras de 13Mpx/2Mpx, Cámara delantera de 5Mpx, Procesador MediaTek MT6761 Helio A22 Quad-Core de 2GHz con 2GB de RAM, ", 48402, "./img/nokia.jpg")
const celular3= new Celular("LG K50s X540 32 GB 3gb Ram", "Pantalla: 6.5, 720 x 1520 pixels, Procesador: MediaTek Helio P22 2GHz, RAM: 3GB, Almacenamiento: 32GB ,Expansión: microSD, Cámara: Triple, 13MP+5MP+2MP ,Batería: 4000 mAh, OS: Android 9.0, Perfil: 8.2 mm", 35999,"./img/lg.jpg" )
const celular4= new Celular("Motorola G22 128GB", "Tipo de producto Smartphones,Sistema operativo Android 12, Tamaño de la pantalla 6.53, Conectividad 4G, Núcleos del procesador Octa Core, Velocidad de la CPU 2,3Ghz, Memoria interna 128GB,Memoria expandible Hasta 1TB, Memoria RAM 4GB", 36499 ,"./img/motorola.jpg")

//Definimos nuestro array de celulares con los modelos

const celulares=[celular1, celular2, celular3, celular4]

//creamos un array vacio para ir agregando los productos 
const shopCell = []

// accedemos al html con el DOM y buscamos la clase a donde vamos a cargar nuestras cards

const cardCelular = document.getElementById('cardCelular')

//creamos nuestra funcion para crear los productos automaticamente al momento de cargar la pagina

celulares.forEach((cell) => {
    const card= document.createElement('div')
    
    card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${cell.img}" class="card-img-top" alt="...">
            <div class="card-body bg-dark text-white">
              <h5 class="card-title">Celular ${cell.modelo}  </h5>
              <p class="card-text">Descripcion: ${cell.descripcion} </p>
              <p>Precio $${cell.precio}</p>
              <button data-id="${cell.modelo}" class="btn btn-danger boton">Agregar al Carrito</button>
            </div>
        </div>

    
    `
    cardCelular.append(card)
})

//seleccionamos todos los botones que tenemos con la clase boton
const BotonesCarrito = document.querySelectorAll('.boton')
console.log( BotonesCarrito);

//creamos una funcion con el parametro del evento por el cual al momento de hacer click en el mouse nos envia la informacion al array y nos lo muestra por consola

const articuloagregado=(e) => {
    const celularelegido= e.target.getAttribute('data-id')
    const buscar_modelo = celulares.find((cell) => cell.modelo == celularelegido )
    shopCell.push(buscar_modelo)
    alert ('El celular fue agregado al carrito')
    console.log(shopCell);
}

//creamos una funcion para todos los botones agregar al carrito y al hacer click
BotonesCarrito.forEach((agregar) => {
    agregar.addEventListener('click', articuloagregado)
})

//Buscador
//Creamos nuestro Array de objetos donde vamos a buscar si hay disponibles a traves del buscador.. 
const telefonos = [
    {nombre: 'Samsung Galaxy A12', valor: 60000},
    {nombre: 'Nokia 23 M 32 GB 2 GB Ram', valor: 48402} ,   
    {nombre:'LG K50s X540 32 GB 3gb Ram', valor: 35999},
    {nombre: 'Motorola G22 128GB', valor: 36499}, 
] 
//creamos nuestras variables seleccionandola desde el html por sus ID
const formulario = document.querySelector('#formulario')
const boton = document.querySelector('#boton2')
const resultado = document.querySelector('#resultado')
//Creamos nuestra funcion flecha para buscar el resultado en nuestro array..
const filtrar = () =>{
    //console.log(formulario.value);
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase()

    for(let telefono of telefonos){
        let nombre = telefono.nombre.toLowerCase()
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML +=`
            <li>${telefono.nombre} - Valor: $${telefono.valor} </li>`
        }
    
    }   
    
        if(resultado.innerHTML === ''){
            resultado.innerHTML += `
                <li> Producto no encontrado... </li>
        `
    }
}   

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup',filtrar)
filtrar()
//Fin del ciclo