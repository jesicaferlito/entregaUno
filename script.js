let opcion
let topping1 = 50;
let topping2 = 75;
let helado = 190;

do{
opcion = parseInt(prompt("ingrese 1 para topping1/ingrse 2 para topping2/ingrese 3 para helado solo"))
 if(opcion===1){
    console.log("el helado cuesta $" + " " + (helado + topping1)  )
 } else if (opcion===2){
    console.log("el helado cuesta $ " + " " + (helado + topping2)  )
 } else if (opcion ===3){
    console.log("el helado cuesta $" + " " + helado )
 }

} while (opcion != 0)
