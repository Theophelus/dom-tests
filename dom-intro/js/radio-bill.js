// get a reference to the sms or call radio buttons, callTotal, smsTotal and totalTwo
var callsLbl = document.querySelector(".callTotalTwo");
var billTotal = document.querySelector(".totalTwo");
var smsLbl = document.querySelector(".smsTotalTwo");
//get a reference to the add button
var radioBillBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var smsTotal = 0;
var callTotal = 0;

//Add a function to be able to calculate number of call and sms's
var radioButtonBill = function(){
  //Assign both radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if(checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  }
  //Loop through the list of billItemType
  //for(var i=0; i<billItemType; i++){
    //Check iwhich radio button is selected, increment by one with amount
    if(billItemType ==="call"){
      callTotal += 2.75;
    }

    if(billItemType ==="sms"){
      smsTotal += .75;
    }

  //}
  callsLbl.innerHTML = callTotal.toFixed(2);
  smsLbl.innerHTML = smsTotal.toFixed(2);
  var totalBill = callTotal + smsTotal
  billTotal.innerHTML = totalBill.toFixed(2);

  if(totalBill >= 30){
    billTotal.classList.add("warning");
  }
   if (totalBill >= 50) {
    billTotal.classList.add("danger");
  }
}

radioBillBtn.addEventListener("click", radioButtonBill);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//add an event listener for when the add button is pressed
