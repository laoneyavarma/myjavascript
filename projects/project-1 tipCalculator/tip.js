const inputBillEl=document.getElementById("bill");
const inputTipEl=document.getElementById("tip");
const btnEl=document.getElementById("calbtn");
const totalSpanEl=document.getElementById("total");

function calculateAmount() {
    const billAmnt = inputBillEl.value;
    const tipAmnt = inputTipEl.value;
    const totalValue = billAmnt * ( 1 + tipAmnt / 100 );
    totalSpanEl.innerText = totalValue.toFixed(2) ;
}
btnEl.addEventListener("click" ,calculateAmount);