// get a reference to the sms or call radio buttons
var callTotalElem = document.querySelector(".callTotalSettings");
var smsTotalElem = document.querySelector(".smsTotalSettings");
var totalElem = document.querySelector(".totalSettings");

// get refences to all the settings fields
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningLevelElem = document.querySelector(".warningLevelSetting");
var criticalLevelElem = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addElem = document.querySelector(".addButton");
//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCostTotal = 0;
var smsCostTotal = 0;
var warningLevelTotal = 0;
var criticalTotal = 0;

// create a variables that will keep track of all three totals.
var callRadTotal = 0;
var smsRadTotal = 0;
var totalForAll = 0;

//Create a function foe update settings
var updateSettings = function(){
  //Initialise all variables to keep track of all settings
  var callSettings = callCostElem.value;
  var smsSettings = smsCostElem.value;
  var warningSettings = warningLevelElem.value;
  var criticalSettings = criticalLevelElem.value;
  //Check if all settings contain a string, if contain a string change into a decimal.....
  if(callSettings !=""){
    callCostTotal = parseFloat(callSettings);
  }
  if(smsSettings !="") {
    smsCostTotal = parseFloat(smsSettings);
  }

  if (warningSettings !=""){
    warningLevelTotal = parseFloat(warningSettings);
  }
  if(criticalSettings !=""){
    criticalTotal = parseFloat(criticalSettings);
  }

  //If user want to extend number of calls and sms then remove warning and critical level to total Bill
  if(totalForAll < warningLevelTotal){
    totalElem.classList.remove("warning");
  }
  if(totalForAll < criticalTotal){
    totalElem.classList.remove("danger");
    addElem.disabled = false;
  }
}
//create a function for billSetting
var billSettings = function(){
  //in the event listener get the value from the billItemTypeRadio radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if(checkedRadioBtn){
    var radChecked = checkedRadioBtn.value;
  }
  // * add the appropriate value to the call / sms total
  if(radChecked === "call"){
    callRadTotal += callCostTotal;
  }
  if(radChecked === "sms"){
    smsRadTotal += smsCostTotal;
  }
  // * add the appropriate value to the overall total
  // * display the latest total on the screen.
  callTotalElem.innerHTML = callRadTotal.toFixed(2);
  smsTotalElem.innerHTML = smsRadTotal.toFixed(2);
  var totalForAll = callRadTotal + smsRadTotal;
  totalElem.innerHTML = totalForAll.toFixed(2);

  // * check the value thresholds and display the total value in the right color.


  if(totalForAll >= criticalTotal){
    totalElem.classList.add("danger");
    addElem.disabled = true;
  }

  else if(totalForAll >= warningLevelTotal ){
    totalElem.classList.add("warning");
  }
}

//add an event listener for when the 'Update settings' button is pressed
updateSettingsElem.addEventListener("click", updateSettings);
//add an event listener for when the add button is pressed
addElem.addEventListener("click", billSettings);
