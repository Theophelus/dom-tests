
//Create a factory function for update settings
var UpdateSettings = function(){
  // create a variables that will keep track of all the settings
  var callCostTotal = 0;
  var smsCostTotal = 0;
  var warningLevelTotal = 0;
  var criticalTotal = 0;
  //Add methods to check if its a string then convert into  a decimal
  var callSettingsFunc = function(callSettings){
    if(callSettings !=""){
      callCostTotal = parseFloat(callSettings);
    }
  }
  // add another function to return call cost total
  var returnCallSettings = function(){
    return callCostTotal;
  }
  var smsSettingsFunc = function(smsSettings){
    if(smsSettings !="") {
      smsCostTotal = parseFloat(smsSettings);
    }
  }
  // add anpother function to return sms cost total
  var returnSmsSettings = function(){
    return smsCostTotal;
  }
  var warningSettingsFunc = function(warningSettings){
    if (warningSettings !=""){
      warningLevelTotal = parseFloat(warningSettings);
    }
  }
  var criticalSettingsFunc = function(criticalSettings){
    if(criticalSettings !=""){
      criticalTotal = parseFloat(criticalSettings);
    }
  }

  return {
    callSettingsFunc,
    returnCallSettings,
    smsSettingsFunc,
    returnSmsSettings,
    warningSettingsFunc,
    criticalSettingsFunc
  }
}

//create a factory function call BillSetings
var BillSettings = function(){
  // create a variables that will keep track of all three totals.
  var callRadTotal = 0;
  var smsRadTotal = 0;
  var totalForAll = 0;
  //Create methods for checking and return calls and sms's amount
  var radCallFunc = function(radChecked){
    if(radChecked === "call"){
      callRadTotal += newUpdateSettings.returnCallSettings();
    }
  }
  //Add a return function for calls
  var returnCall = function(){
    return callRadTotal;
  }
  var radSmsFunc = function(radChecked){
    if(radChecked === "sms"){
      smsRadTotal += newUpdateSettings.returnSmsSettings();
    }
  }
  //Add a return function for calls
  var returnSms = function(){
    return smsRadTotal;
  }

  var settingsTotal = function(){
    return totalForAll = callRadTotal + smsRadTotal;
  }
  return {
    radCallFunc,
    returnCall,
    radSmsFunc,
    returnSms,
    settingsTotal
  }
}
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

// Add an object instance of update element factory function
var newUpdateSettings = UpdateSettings();
//add an event listener for when the 'Update settings' button is pressed
  updateSettingsElem.addEventListener("click", function(){
  //Initialise all variables to keep track of all settings
  var callSettings = callCostElem.value;
  var smsSettings = smsCostElem.value;
  var warningSettings = warningLevelElem.value;
  var criticalSettings = criticalLevelElem.value;
  //Populate methods inside factory function with values
  newUpdateSettings.callSettingsFunc(callSettings);
  newUpdateSettings.smsSettingsFunc(smsSettings);
  newUpdateSettings.warningSettingsFunc(warningSettings);
  newUpdateSettings.criticalSettingsFunc(criticalSettings);
});

//Add object instance of BillSettings factory function
var newBillSettings = BillSettings();
//add an event listener for when the add button is pressed
addElem.addEventListener("click", function(){
  //in the event listener get the value from the billItemTypeRadio radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if(checkedRadioBtn){
    var radChecked = checkedRadioBtn.value;
  }
  //Populate call and sms methods with checked radio buttons
  newBillSettings.radCallFunc(radChecked);
  newBillSettings.radSmsFunc(radChecked);

  //Declare a variable to store total
  var totalAll = newBillSettings.settingsTotal();
  smsTotalElem.innerHTML = newBillSettings.returnSms().toFixed(2);
  callTotalElem.innerHTML = newBillSettings.returnCall().toFixed(2);
  totalAll = newBillSettings.returnCall() + newBillSettings.returnSms();
  totalElem.innerHTML = totalAll.toFixed(2);

  if(totalAll >= criticalTotal){
    totalElem.classList.add("danger");
    addElem.disabled = true;
  }

  else if(totalAll >= warningLevelTotal ){
    totalElem.classList.add("warning");
  }
});
