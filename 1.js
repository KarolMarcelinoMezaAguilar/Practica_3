let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a function created on the fly');
});

//interpolación de strings "clásica"
let logGreeting1 = (miNombre, miColor) => {
    console-log("Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}
logGreeting1("Carlos", "Azul");