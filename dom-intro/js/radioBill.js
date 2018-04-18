
//Create a factory function call factoryRadioBill
var RadioButtonBill = function(){
  var smsTotal = 0;
  var callTotal = 0;
  var totalBill = 0;
  //Add a method to calculate call Totals
  var billCallTotal = function(billItemType){
    if(billItemType ==="call"){
      callTotal += 2.75;
    }
  }
  //Add a return function to call Total variable
    var returnCallTotal = function(){
      return callTotal;
    }
  //Add a function for calculate sms Total
  var billSmsTotal = function(billItemType){
    if(billItemType ==="sms"){
      smsTotal += .75;
    }
  }
  //Add a return function to sms Total varaible
  var returnSmsTotal = function(){
      return smsTotal
    }
  //Add a function to calculate Total bill
  var calRadioBillTotal = function(){
    return totalBill = callTotal + smsTotal;
  }
  //Return those methods as object literals
  return {
    billCallTotal,
    returnCallTotal,
    billSmsTotal,
    returnSmsTotal,
    calRadioBillTotal
  }
}

// get a reference to the sms or call radio buttons, callTotal, smsTotal and totalTwo
var callsLbl = document.querySelector(".callTotalTwo");
var billTotal = document.querySelector(".totalTwo");
var smsLbl = document.querySelector(".smsTotalTwo");
//get a reference to the add button
var radioBillBtn = document.querySelector(".radioBillAddBtn");
//Declare an object instance of the fsctory function
var newRadioBill = RadioButtonBill();
radioBillBtn.addEventListener("click", function(){
  //Assign both radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if(checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  }
  //Call all methods in the factory function using its object instance and pass billItemType
  //  as parameter
  newRadioBill.billCallTotal(billItemType)
  newRadioBill.billSmsTotal(billItemType);
  var calTotal = newRadioBill.calRadioBillTotal();
  //create a variable that will keep track of the total bill
  callsLbl.innerHTML = newRadioBill.returnCallTotal().toFixed(2);
  smsLbl.innerHTML = newRadioBill.returnSmsTotal().toFixed(2);
  calTotal = newRadioBill.returnCallTotal() + newRadioBill.returnSmsTotal();
  billTotal.innerHTML = calTotal.toFixed(2);

  //Check restriction levels
  //Add a variable to cal
  if(calTotal >= 30){
  billTotal.classList.add("warning");
  }
  if (calTotal >= 50) {
  billTotal.classList.add("danger");
  }
});
