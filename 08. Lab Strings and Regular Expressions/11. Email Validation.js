function solve(arr) {
let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    if(regex.test(arr)){
    console.log("Valid")
    } else {
        console.log("Invalid");
    }
}
solve('valid@email.bg');
solve('invalid@emai1.bg');