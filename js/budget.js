document
    .getElementById("flower-buy-btn")
    .addEventListener("click", function () {
        const flowerQuantity = document.getElementById("flower-quantity").value;
        setInnerText("flower-bouquet", flowerQuantity);
        const flowerCost = flowerQuantity * 1250;
        setInnerText("flower-cost", flowerCost);
        totalCost();
    });
document
    .getElementById("kitkat-buy-btn")
    .addEventListener("click", function () {
        const kitkatQuantity = getQuantityValue("kitkat-quantity");
        setInnerText("kitkat", kitkatQuantity);
        const kitkatCost = parseInt(kitkatQuantity) * 220;
        setInnerText("kitkat-cost", kitkatCost);
        totalCost();
    });
document
    .getElementById("cosmetics-buy-btn")
    .addEventListener("click", function () {
        const cosmeticsQuantity = getQuantityValue("cosmetics-quantity");
        setInnerText("cosmetics", cosmeticsQuantity);
        const cosmeticsCost = cosmeticsQuantity * 2000;
        setInnerText("cosmetics-cost", cosmeticsCost);
        totalCost();
    });
document
    .getElementById("perfume-buy-btn")
    .addEventListener("click", function () {
        const perfumeQuantity = getQuantityValue("perfume-quantity");
        setInnerText("perfume", perfumeQuantity);
        const perfumeCost = parseInt(perfumeQuantity) * 950;
        setInnerText("perfume-cost", perfumeCost);
        totalCost();
    });

function totalCost() {
    const flowerCost = document.getElementById("flower-cost").innerText;
    const kitkatCost = document.getElementById("kitkat-cost").innerText;
    const cosmeticsCost = document.getElementById("cosmetics-cost").innerText;
    const perfumeCost = document.getElementById("perfume-cost").innerText;

    const totalCost =
        parseInt(flowerCost) +
        parseInt(kitkatCost) +
        parseInt(cosmeticsCost) +
        parseInt(perfumeCost);

    setInnerText("total-cost", totalCost);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
// getQuantity value from input
function getQuantityValue(id) {
    const value = parseInt(document.getElementById(id).value);
    return value;
}

document.getElementById("promoApplyBtn").addEventListener("click", function () {
    const promoCode = getQuantityValue("promo-code");

    if (promoCode === 101) {
        const total = document.getElementById("total-cost").innerText;
        const sum = parseInt(total) * 0.1;
        const discountPriceTotal = total - parseInt(sum);
        setInnerText("grand-total", discountPriceTotal);
    } else {
        alert("Wrong Promo code! Try Again");
    }
});
