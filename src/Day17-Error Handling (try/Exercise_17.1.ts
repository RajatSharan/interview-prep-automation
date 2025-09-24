function divide(num1: number, num2: number): number {
    if (num2 === 0) {
        throw new Error("Cannot be zero");
    }
    return num1 / num2;
}

try {
    console.log(divide(10, 0));   // Will throw → caught
    console.log(divide(50, 12));  // Will succeed → logged
} catch (error) {
    console.error((error as Error).message);
}
