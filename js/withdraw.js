document.getElementById('btn-withdraw').addEventListener('click', function(){
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawAmountString = withdrawTotalElement.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
const balanceTotal = document.getElementById('balance-total');
const previousTotalString = balanceTotal.innerText;
const previousTotal = parseFloat(previousTotalString);
withdrawField.value = '';
    if(newWithdrawAmount > previousTotal){
        alert('Not enough fund')
        return;
    }
const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;
    const newTotalBalance = previousTotal - newWithdrawAmount;
    balanceTotal.innerText = newTotalBalance;
    
})