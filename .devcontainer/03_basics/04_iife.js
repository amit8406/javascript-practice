
// Immediately Invoked Function Expressions
(function chai(){
    console.log(`DB Connected`);// 
})();

( (name) => {
    console.log(`DB connected 2 ${name}`);
})('Deepak')

