function getInputValue (inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat (inputAmountText);
    return amountValue;
}

// function updateTotalField ()





document.getElementById('calculate-btn').addEventListener('click', function(){
   
    // Income Input 
    const incomeAmount = getInputValue ('income-input');
    // Food Costing
    const foodCostingAmount = getInputValue ('food-costing');
    //Rent Costing 
    const rentCostingAmount = getInputValue ('rent-costing');
    // Clothing costing
    const clothCostingAmount = getInputValue ('cloth-costing');
    
    // Total Expense 

    const totalExpenses = document.getElementById('total-expenses');
    let totalExpensesAmount = parseFloat(totalExpenses.innerText);
    totalExpensesAmount = + foodCostingAmount + rentCostingAmount + clothCostingAmount ;
    totalExpenses.innerText = totalExpensesAmount;
    
   

    // Balance

    const balanceTotal =document.getElementById ('balance-total');
    let balanceTotalAmount = parseFloat(balanceTotal.innerText);
    balanceTotalAmount = incomeAmount -totalExpensesAmount;
    balanceTotal.innerText =balanceTotalAmount;

});

// Save Buuton CLick
document.getElementById ('save-btn').addEventListener ('click', function(){
    
    // Save percentage
    const savePercentageInput = document.getElementById ('save-input');
    const savePercentageInputText = savePercentageInput.value;
    const savePercentageInputAmount = parseFloat (savePercentageInputText);
   
    // Income
    const incomeInput= document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const incomeAmount = parseFloat(incomeText);

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


})