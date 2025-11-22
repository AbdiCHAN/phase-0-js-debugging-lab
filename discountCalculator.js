function calculateDiscountedPrice(quantity, pricePerItem) {

    debugger;
    // In REPL:
    // quantity
    // pricePerItem

    let totalPrice = 0;

    debugger;
    // In REPL:
    // totalPrice

    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;

        debugger;
        // In REPL:
        // totalPrice
        // i
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;

        debugger;
        // In REPL:
        // totalPrice
    }

    return totalPrice;
}

module.exports = calculateDiscountedPrice;

// 👇 THIS SO THE DEBUGGER  RUNS IN THE  FUNCTION
calculateDiscountedPrice(12, 5);
// 👇  THIS LINE TO SHOW OUTPUT
console.log(calculateDiscountedPrice(12, 5));