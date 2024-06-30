// Define the function we want to minimize.
function f(x) {
    // This is the function we are trying to find the minimum value for.
    // Example function: f(x) = (x - 2)^2 + 3
    return (x - 2) ** 2 + 3;
}

// Golden-Section Search parameters
const phi = (1 + Math.sqrt(5)) / 2; // Calculate the golden ratio (approximately 1.618)
const resphi = 2 - phi; // Calculate 1 - phi (approximately 0.618)

// Define the interval [a, b] and tolerance level.
let a = 0; // Start of the interval
let b = 5; // End of the interval
const tolerance = 0.0001; // Tolerance level to control the accuracy of the result

// Initialize points
let c = b - resphi * (b - a); // Calculate point c using the golden ratio
let d = a + resphi * (b - a); // Calculate point d using the golden ratio

// Perform the Golden-Section Search iteration.
while (Math.abs(b - a) > tolerance) { // Continue until the interval is smaller than the tolerance
    if (f(c) < f(d)) { // Compare function values at points c and d
        b = d; // If f(c) is less, move the end of the interval to d
    } else {
        a = c; // If f(d) is less, move the start of the interval to c
    }
    // Recalculate points c and d within the new interval
    c = b - resphi * (b - a); // Recalculate point c
    d = a + resphi * (b - a); // Recalculate point d
}

// The minimum is approximately at (a + b) / 2
const min = (a + b) / 2; // Calculate the midpoint of the final interval

// Output the result
console.log(`The minimum value is approximately at x = ${min}`); // Print the x value of the minimum
console.log(`The minimum value of the function is approximately f(x) = ${f(min)}`); // Print the function value at the minimum
