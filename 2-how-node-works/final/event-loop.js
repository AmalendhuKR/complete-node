const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

// timer expired phase:1
setTimeout(() => console.log("Timer 1 finished"), 0);

// setImmediate phase:3
setImmediate(() => console.log("Immediate 1 finished"));

// IO polling phase:2
fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------");

  // phase 1
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  // phase 3
  setImmediate(() => console.log("Immediate 2 finished"));

  // phase 5
  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
});
// top-level function
console.log("Hello from the top-level code");
