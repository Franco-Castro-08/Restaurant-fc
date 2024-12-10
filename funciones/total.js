import { Menu } from "../clases/Menu.js";
//Aquí se suma el total de lo consumido por cliente 

export function total(precio,cantidad){
    return (precio * cantidad)
}

export function totalConsumidoP(totalP1,totalP2,totalP3,totalP4){
    return totalP1 + totalP2 + totalP3 + totalP4
}

export function totalConsumidoB(totalB1,totalB2,totalB3){
    return totalB1 + totalB2 + totalB3
}

export function totalConsumidoComp(totalC1,totalC2){
    return totalC1 + totalC2 
}