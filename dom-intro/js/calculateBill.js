//create the function that will be called when the calculate button is pressed

var totalPhoneBill = function(billValue){

  var splitBillString= billValue.split(",");

  var total = 0;

  for(var i=0; i<splitBillString.length; i++){

    var trimBillString = splitBillString[i].trim();

    if(trimBillString === "call"){
      total += 2.75;
    }else if (trimBillString === "sms"){
      total += 0.75;
    }
  }
    return total.toFixed(2)
  }

  //get a reference to the calculate button
  var calBtn = document.querySelector(".calculateBtn");
  //get a reference to the billTotal element
  var totalBill = document.querySelector(".billTotal");
  //get a reference to the billString
  var billStringTxt =  document.querySelector(".billString");
  //Declare a variable to store number of calls and sms with their prices
  var total = 0;
  //var billValue = billStringTxt.value;
calBtn.addEventListener("click", function(){
  var billValue = billStringTxt.value;
  var roundedTotalBill = totalPhoneBill(billValue);
  totalBill.innerHTML = roundedTotalBill;

  //Check if total is greater than 20 but less than or equals to 30
  // then raise warningSettings else if less than remove warning levels
  if(total >= 20 && total <= 30){
    totalBill.classList.add("warning");
  }else if(total < 20){
    totalBill.classList.remove("warning");
  }
  //Check if total is greater than 30 then raise critical levels else if less than remove critical levels
  if(total >= 30){
    totalBill.classList.add("danger");
  }else if (total < 30) {
    totalBill.classList.remove("danger");
  }
});
