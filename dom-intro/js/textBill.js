
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
    return textCallTotal;
  }


  //create a function to calculate sms bill
  var smsBill = function(billString){
    if(billString == "sms"){
      textSmsTotal += .75;
    }
  //  return textSmsTotal;
  }
  //create a function to calculate total costs
// var returnTextSmsTotal = function(){
//   return textSmsTotal
// }

  var totalCostBill = function(){
    return totalCost = textCallTotal + textSmsTotal;
  }
  return {
    call: callBill,
    sms: smsBill,
    grandTotal: totalCostBill
  }
}

// get a reference to the textbox where the bill type is to be entered
var billTxt = document.querySelector(".billTypeText");
var callElem = document.querySelector(".callTotalOne");
var smsElem= document.querySelector(".smsTotalOne");
//get a reference to the add button
var calculate = document.querySelector(".addToBillBtn");

//create a variable that will keep track( of the total bill
var totalCostElem = document.querySelector(".totalOne");
var callFactoryFunction = factoryTextBill()
//add an event listener for when the add button is pressed
calculate.addEventListener("click", function(){
  //Initialise billTxt
  var billString = billTxt.value;
//  var totalCost = new factoryTextBill(billString);

  //Initialise all the labels with call and sms total
  callElem.innerHTML = callFactoryFunction.call();
  smsElem.innerHTML = callFactoryFunction.sms();
  //initialise total amount with totalBill reference
  totalCostElem.innerHTML = callFactoryFunction.grandTotal();

  // //Add danger if total Cost is greater than or Equal to R50
  // if(totalCost >= 30){
  //   totalCostElem.classList.add("warning");
  // }
  // if(totalCost >= 50){
  //   totalCostElem.classList.add("danger");
  // }
});
