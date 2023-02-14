// 1. add event handler to the deposit button
// 2. get deposit amount from the deposit input field
// 2.5 - convert string deposit amount to a number type using parsefloat
// step 3: clear deposit field using empty string after getting the value
// step 4: get the previous deposit data

document.getElementById('btn-deposit').addEventListener('click', function(){
const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   depositField.value = '';
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousTotalString = balanceTotal.innerText;
    const previousTotal = parseFloat(previousTotalString);
    const newTotalBalance = newDepositAmount + previousTotal;
    balanceTotal.innerText = newTotalBalance;
})