function getInputValue (inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat (inputAmountText);
    return amountValue;
}

function updateTotalField (fieldId, amount1, amount2 ,amount3 ) {

    const totalElement = document.getElementById(fieldId);
    let totalElementAmount = parseFloat(totalElement.innerText);
    totalElementAmount = amount1 + amount2 + amount3 ;
    totalElement.innerText = totalElementAmount;
    return totalElementAmount;
}

function updateBalance (balanaceId, income, expenses ) {
    const balanceTotal =document.getElementById (balanaceId);
    let balanceTotalAmount = parseFloat(balanceTotal.innerText);
    balanceTotalAmount = income -expenses;
    balanceTotal.innerText =balanceTotalAmount;
    return balanceTotalAmount;
}

  

document.getElementById('calculate-btn').addEventListener('click', function(){
   
    // Income Input 
    const incomeAmount = getInputValue ('income-input');
    if((isNaN(incomeAmount) || (incomeAmount <0))) {
        alert ('Please give a postive number');

    }
    // Food Costing
    const foodCostingAmount = getInputValue ('food-costing');
    if((isNaN(foodCostingAmount) || (foodCostingAmount <0))) {
        alert ('Please give a postive number');
    }

    //Rent Costing 
    const rentCostingAmount = getInputValue ('rent-costing');
    if((isNaN(rentCostingAmount) || (rentCostingAmount <0))) {
        alert ('Please give a postive number');
    }
    // Clothing costing
    const clothCostingAmount = getInputValue ('cloth-costing');
    if((isNaN(clothCostingAmount) || (clothCostingAmount <0))) {
        alert ('Please give a postive number');
    }

    // Total Expense 
   const totalExpensesAmount= updateTotalField('total-expenses',foodCostingAmount,rentCostingAmount,clothCostingAmount);

    // Balance
   let balanceAmount = updateBalance ('balance-total', incomeAmount, totalExpensesAmount);
       if (balanceAmount <0){
           alert("Ooops!!! Youd don't have sufficient balance")
            balanceAmount.innerText(0);
       }
    });

    // Save Buuton CLick
    document.getElementById ('save-btn').addEventListener ('click', function(){
    
    // Save percentage
    const savePercentageInputAmount = getInputValue ('save-input');
   
    // Income
    const incomeAmount = getInputValue ('income-input');

    // Saving amount
    const savingInput =document.getElementById('saving-amount');
    let savingInputAmount = parseFloat(savingInput.innerText);
    savingInputAmount = incomeAmount * (savePercentageInputAmount/100);
    savingInput.innerText = savingInputAmount;
    
  

    // Balance

    const balanceTotal =document.getElementById ('balance-total');
    let balanceTotalAmount = parseFloat(balanceTotal.innerText);
  
    // Remaining Balance
    const remainngBalance= document.getElementById('remaining-amount');
    let remainingBalanceAmount= parseFloat(remainngBalance.innerText);
    remainingBalanceAmount = balanceTotalAmount - savingInputAmount; 
    remainngBalance.innerText = remainingBalanceAmount;

    // Savings error
    if (savingInputAmount >  balanceTotalAmount) {
        alert ("You don't have sufficient balance to save !!!")
    }

})

