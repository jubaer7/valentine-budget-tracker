// Get the quantity of flowers, the user wants to buy from the input field
document
    .getElementById("flower-buy-btn")
    .addEventListener("click", function () {
        const flowerQuantity = document.getElementById("flower-quantity").value;
        // update the displayed quantity of flowers in the checkout table
        setInnerText("flower-bouquet", flowerQuantity);
        const flowerCost = flowerQuantity * 60.98;
        setInnerText("flower-cost", flowerCost);
        // Recalculate the total cost of all items in the checkout table and update the displayed total cost
        totalCost();
    });
document
    .getElementById("kitkat-buy-btn")
    .addEventListener("click", function () {
        const kitkatQuantity = getQuantityValue("kitkat-quantity");
        setInnerText("kitkat", kitkatQuantity);
        const kitkatCost = parseFloat(kitkatQuantity) * 12.7;
        setInnerText("kitkat-cost", kitkatCost);
        totalCost();
    });
document
    .getElementById("cosmetics-buy-btn")
    .addEventListener("click", function () {
        const cosmeticsQuantity = getQuantityValue("cosmetics-quantity");
        setInnerText("cosmetics", cosmeticsQuantity);
        const cosmeticsCost = (parseFloat(cosmeticsQuantity) * 39.95).toFixed(
            2
        );
        setInnerText("cosmetics-cost", cosmeticsCost);
        totalCost();
    });
document
    .getElementById("perfume-buy-btn")
    .addEventListener("click", function () {
        const perfumeQuantity = getQuantityValue("perfume-quantity");
        setInnerText("perfume", perfumeQuantity);
        const perfumeCost = (parseFloat(perfumeQuantity) * 35.99).toFixed(2);
        setInnerText("perfume-cost", perfumeCost);
        totalCost();
    });

function totalCost() {
    const flowerCost = parseFloat(
        document.getElementById("flower-cost").innerText
    ).toFixed(2);
    const kitkatCost = parseFloat(
        document.getElementById("kitkat-cost").innerText
    ).toFixed(2);
    const cosmeticsCost = parseFloat(
        document.getElementById("cosmetics-cost").innerText
    ).toFixed(2);
    const perfumeCost = parseFloat(document.getElementById("perfume-cost").innerText).toFixed(2);


    const totalCost =
        parseFloat(flowerCost) +
        parseFloat(kitkatCost) +
        parseFloat(cosmeticsCost) +
        parseFloat(perfumeCost);

    setInnerText("total-cost", totalCost);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// getQuantity value from input
function getQuantityValue(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

document.getElementById("promoApplyBtn").addEventListener("click", function () {
    const promoCode = getQuantityValue("promo-code");

    if (promoCode === 101) {
        const total = document.getElementById("total-cost").innerText;
        const sum = parseFloat(total) * 0.1;
        const discountPriceTotal = total - parseFloat(sum);
        const grandTotal = discountPriceTotal.toFixed(2);
        setInnerText("grand-total", grandTotal);
    } else {
        alert("Wrong Promo code! Try Again");
    }
});
