// script.js
function calculateFees() {
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const referralFeePercentage = parseFloat(document.getElementById('referralFee').value);
    const closingFee = parseFloat(document.getElementById('closingFee').value);
    const shippingCost = parseFloat(document.getElementById('shippingCost').value);
    const cogs = parseFloat(document.getElementById('cogs').value);

    const referralFee = (sellingPrice * referralFeePercentage) / 100;
    const totalFees = referralFee + closingFee + shippingCost + cogs;
    const profit = sellingPrice - totalFees;

    document.getElementById('totalFees').textContent = totalFees.toFixed(2);
    document.getElementById('profit').textContent = profit.toFixed(2);
}
