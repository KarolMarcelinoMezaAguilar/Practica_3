let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a function created on the fly');
});