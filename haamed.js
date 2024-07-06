function demoFunctionInHaamed() {
  console.log("A method in azimi.js");
}

let s = 3661;

let hours = (s / 60) / 60;
s = (s / 60) / 60;
let minutes = s / 60;
s = s / 60;
let seconds = s;

console.log(`Hours: ${hours} \nMinutes: ${minutes} \nSeconds: ${seconds}`);
