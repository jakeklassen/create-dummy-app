#!/usr/bin/env node

const fs = require("fs");

fs.writeFileSync("./dummy.txt", "How's the dummy now?");

console.log("How's the dummy, dummy");
