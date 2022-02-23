function greet(){
    console.log('Hello');
}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);