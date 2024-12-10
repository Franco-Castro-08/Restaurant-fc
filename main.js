import { Cliente } from "./clases/Cliente.js";
import { Mesa } from "./clases/Mesa.js";
import { Menu } from "./clases/Menu.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();

let mesa=[]
let nuevoCliente=[]

// Creación de un cliente
const client1 = new Cliente(34747531,"Fabricio","Montes")
const client2 = new Cliente(2562332,"Gabriela","Mistral")
const client3 = new Cliente(3356466,"Carla","Conte")
const client4 = new Cliente(34747531,"Ivan","Lopez")
const client5 = new Cliente(36692221,"Leo","Perez")
const client6 = new Cliente(34747531,"Martina","Sanchez")

//client.push(client4,client2,client1,client5,client3)
//Crear Menu
const menu1 = new Menu(1, "Hamburguesa", 7000)

// Creación de una mesa

let mesa1 = new Mesa(1, false, client1, menu1)  //let mesa1 = new Mesa(1, false, cliente1)
let mesa2 = new Mesa(2, false, client5, menu1)  //let mesa2 = new Mesa(2, false, cliente5)
let mesa3 = new Mesa(3, false, client2, menu1)   //let mesa3 = new Mesa(3, false, cliente2)
let mesa4 = new Mesa(4, false, client4, menu1)  //let mesa4 = new Mesa(4, false, cliente4)
let mesa5 = new Mesa(5, false, client3, menu1)  //let mesa5 = new Mesa(5, false, cliente3)

let mesa6 = new Mesa(6, true, null, null)

mesa.push(mesa1,mesa2,mesa3,mesa4,mesa5,mesa6)
console.log(mesa)


for(let i=0; i<mesa.length;i++){

    if (mesa[i].disponible === true){
        console.log("Ingrese sus datos para registrar su cliente:");
        let dni = prompt("DNI: ");
        let nombre = prompt("Nombre: ");
        let apellido = prompt("Apellido: ");
        
        nuevoCliente.push(new Cliente(dni,nombre,apellido))  
    
        console.log(nuevoCliente)
        
        let nCli= nuevoCliente

        console.log(`La mesa ${mesa[i].id} está disponible para usted señor/a`)     
        mesa.push(mesa[i].disponible=false,mesa[i].cliente=nCli) 
        console.log(mesa[i])    
        //Aquí seleccionamos un menu                       
        mesa[i].seleccionMenu()

    }

}
