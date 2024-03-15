function printFibonacci(limit) {
    var prev = 0;
    var curr = 1;
    var next;

    console.log(prev); // Printing the first Fibonacci number

    while (curr <= limit) {
        console.log(curr); // Printing the current Fibonacci number

        // Calculating the next Fibonacci number
        next = prev + curr;
        prev = curr;
        curr = next;
    }
}


printFibonacci(10);