import promptSync from "prompt-sync";
const prompt = promptSync();
import { Menu } from "./Menu.js";
import { total, totalConsumidoB, totalConsumidoComp, totalConsumidoP } from "../funciones/total.js";

let menuRes = [];
const menu1 = new Menu(1, "Hamburguesa", 7000);
const menu2 = new Menu(2, "Lomo", 6500);
const menu3 = new Menu(3, "Pizza", 5000);
const menu4 = new Menu(4, "Milanesa", 4500);

menuRes.push(menu1, menu2, menu3, menu4);

let menuBebida=[]
const bebida1 = new Menu(1,"Gaseosa",3000)
const bebida2 = new Menu(2,"Agua Saborizada",2500)
const bebida3 = new Menu(3,"Cerveza",4000)

menuBebida.push(bebida1,bebida2,bebida3)

let totalPlato1 = 0;
let totalPlato2 = 0;
let totalPlato3 = 0;
let totalPlato4 = 0;
let totalFinalP=0;

let totalBebida1=0;
let totalBebida2=0;
let totalBebida3=0;
let totalFinalB=0;

let totalF=0;

export class Mesa {
  constructor(id, disponible, cliente, menu) {
    this.id = id;
    this.disponible = disponible;
    this.cliente = cliente;
    this.menu = menu;
  }

  seleccionMenu() {
    console.log("Seleccionar un Menu: ");
    // Aca debo pushear el menu

    let ciclo = true;
    while (ciclo === true) {
      const menu = prompt(
        "Aquí debe elegir lo que desea consumir: 1 comida 2 bebida  0 Salir "
      );

      switch (menu) {
        case "1":
          console.log("Elija su menú: ");
          const plato = prompt(
            "Elija lo que desea consumir: (1 Hamburguesa 2 Lomo 3 Pizza 4 Milanesa)--- "
          );
          switch (plato) {
            case "1":
              console.log("Plato: Hamburguesa");
              console.log("Precio: ", menu1.precio);
              const cantP = prompt(" Cuantos va a querer? ");
              totalPlato1 = total(menu1.precio, cantP);
              console.log(`Plato ${cantP}- y el total es ${totalPlato1} `);
              totalFinalP = totalConsumidoP(totalPlato1, totalPlato2, totalPlato3, totalPlato4)
              console.log(totalFinalP)
              break;
            case "2":
              console.log("Plato: Lomo");
              console.log("Precio: ", menu2.precio);
              const cantP2 = prompt(" Cuantos va a querer? ");
              totalPlato2 = total(menu2.precio, cantP2);
              console.log(`Plato ${cantP2}- y el total es ${totalPlato2} `);
              totalFinalP = totalConsumidoP(totalPlato1, totalPlato2, totalPlato3, totalPlato4)
              console.log(totalFinalP)
              break;
            case "3":
              console.log("Plato: Pizza");
              console.log("Precio: ", menu3.precio);
              const cantP3 = prompt(" Cuantos va a querer? ");
              totalPlato3 = total(menu3.precio, cantP3)
              console.log(`Plato ${cantP3}- y el total es ${totalPlato3} `)
              totalFinalP = totalConsumidoP(totalPlato1, totalPlato2, totalPlato3, totalPlato4)
              console.log(totalFinalP)
              break;
            case "4":
              console.log("Plato: Milanesa");
              console.log("Precio: ", menu4.precio);
              const cantP4 = prompt(" Cuantos va a querer? ");
              totalPlato4 = total(menu4.precio, cantP4)
              console.log(`Plato ${cantP4}- y el total es ${totalPlato4} `)
              totalFinalP = totalConsumidoP(totalPlato1, totalPlato2, totalPlato3, totalPlato4)
              console.log(totalFinalP)
              break;
            case "0":
              console.log("Saliendo...");
              ciclo = false;
              break;
            default:
              console.log("Plato desconocido");
          }
          break;

        case "2":
          console.log("Elija su Bebida: ");
          const bebida = prompt(
            "Elijr lo que desea beber: (1 gaseosa 2 Agua Saborizada 3 Cerveza)--- "
          );
          switch (bebida) {
            case "1":
              console.log("Bebida: Gaseosa");
              console.log("Precio: ", bebida1.precio);
              const cantB1 = prompt(" Cuantas va a querer? ");
              totalBebida1 = total(bebida1.precio, cantB1)
              console.log(`Bebida ${cantB1}- y el total es ${totalBebida1} `)
              totalFinalB = totalConsumidoB(totalBebida1, totalBebida2, totalBebida3)
              console.log(totalFinalB)
              totalF= totalConsumidoComp(totalFinalB, totalFinalP)
              console.log(`Total consumido: ${totalF}`)
              break;
            case "2":
              console.log("Bebida: Agua Saborizada");
              console.log("Precio: ", bebida2.precio);
              const cantB2 = prompt(" Cuantas va a querer? ");
              totalBebida2 = total(bebida2.precio, cantB2)
              console.log(`Bebida ${cantB2}- y el total es ${totalBebida2} `)
              totalFinalB = totalConsumidoB(totalBebida1, totalBebida2, totalBebida3)
              console.log(totalFinalB)
              totalF= totalConsumidoComp(totalFinalB, totalFinalP)
              console.log(`Total consumido: ${totalF}`)
              break;
            case "3":
              console.log("Bebida: Cerveza");
              console.log("Precio: ", bebida3.precio);
              const cantB3 = prompt(" Cuantas va a querer? ");
              totalBebida3 = total(bebida3.precio, cantB3)
              console.log(`Bebida ${cantB3}- y el total es ${totalBebida3} `)
              totalFinalB = totalConsumidoB(totalBebida1, totalBebida2, totalBebida3)
              console.log(totalFinalB)
              totalF= totalConsumidoComp(totalFinalB, totalFinalP)
              console.log(`Total consumido: ${totalF}`)
              break;
            case "0":
              console.log("Saliendo...");
              ciclo = false;
              break;

            default:
              console.log("No hay de esa bebida");
          }
          break;

        case "0":
          console.log("Saliendo...");
          ciclo = false;
          break;
      }
    }
  }
}
