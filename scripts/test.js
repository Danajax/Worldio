//This file is simply for consol.logging whether or not user is signed in
const login = sessionStorage.getItem('Status');
const user = sessionStorage.getItem('Username');
// let mdolor = document.getElementById('temporarysign');
// let msit = document.getElementById('reg');

console.log(user);

if (login == "Trues") {
    console.log("You are logged in, publishing results...");
    // msit.remove();
    // mdolor.remove();
}
else {
    console.log("You are not logged in. Log in to publish your results.");
}