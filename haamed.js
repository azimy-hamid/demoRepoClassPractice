function demoFunctionInHaamed() {
  console.log("A method in azimi.js");
}

let s = 3661;

let hours = Math.floor((s / 60) / 60);
s = Math.ceil((s / 60) / 60);
let minutes = Math.ceil(s / 60);
s = Math.ceil(s / 60);
let seconds = s;

console.log(`Hours: ${hours} \nMinutes: ${minutes} \nSeconds: ${seconds}`);
