
// Create a factory function for text Bill Totlal  called factoryTextBill
var factoryTextBill = function(billString){
  //Declare Global variable inside factory function
  var totalCost = 0;
  var textCallTotal = 0;
  var textSmsTotal = 0;
  //create a function to calculate call bill
  var callBill = function(billString){
    if(billString === "call"){
      textCallTotal += 2.75;
    }
  }

  //Create a function to return Text Call Totalsvar
  var returnTextCallTotal = function(){
    return textCallTotal;
  }
  //create a function to calculate sms bill
  var smsBill = function(billString){
    if(billString == "sms"){
      textSmsTotal += .75;
    }
  }
  //create a function to return Text Sms Total
var returnTextSmsTotal = function(){
  return textSmsTotal;
}

  var totalCostBill = function(){
    return totalCost = textCallTotal + textSmsTotal;
  }
  return {
    returnTextCallTotal,
    returnTextSmsTotal,
    call: callBill,
    sms: smsBill,
    grandTotal: totalCostBill
  }
}

// get a reference to the textbox where the bill type is to be entered
var totalCostElem = document.querySelector(".totalOne");
var billTxt = document.querySelector(".billTypeText");
var callElem = document.querySelector(".callTotalOne");
var smsElem= document.querySelector(".smsTotalOne");
//get a reference to the add button
var calculate = document.querySelector(".addToBillBtn");
//Create an instance of factory Text Bill function
var functionCall = factoryTextBill();
calculate.addEventListener("click", function(){
  var billString = billTxt.value;
  functionCall.call(billString);
  functionCall.sms(billString);
  callElem.innerHTML = functionCall.returnTextCallTotal().toFixed(2);
  smsElem.innerHTML = functionCall.returnTextSmsTotal().toFixed(2);
  //initialise total amount with totalBill reference
  totalCostElem.innerHTML = functionCall.grandTotal().toFixed(2);

  // //Add danger if total Cost is greater than or Equal to R50
  var totalCost = functionCall.grandTotal();
  if(totalCost >= 30){
    totalCostElem.classList.add("warning");
  }
  if(totalCost >= 50){
    totalCostElem.classList.add("danger");
  }
});
