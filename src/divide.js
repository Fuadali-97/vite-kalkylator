function divide(a, b) {
    if (b === 0) {
        throw new Error("Division med noll är inte tillåtet");
    }
    return a / b;
}

export default divide; 