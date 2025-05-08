"use strict";
function formatString(input, toUpper) {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
console.log(formatString("Hello"));
