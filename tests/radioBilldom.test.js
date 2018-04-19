describe('radio Bill Dom Widget tests', function(){
  it('shoul return call amount if call radio button is checked and update grand total', function(){
    var newRadioBill = RadioButtonBill();
    newRadioBill.billCallTotal('call');
    assert.equal(2.75, newRadioBill.returnCallTotal());
  });
  it('should return sms amount if sms radio button is checked and update grand total', function(){
    var newRadioBill = RadioButtonBill();
    newRadioBill.billSmsTotal('sms');
    assert.equal(.75, newRadioBill.returnSmsTotal());
  });
  it('should return grand total for both call and sms', function(){
    var newRadioBill = RadioButtonBill();
    newRadioBill.billCallTotal('call')
    newRadioBill.billSmsTotal('sms');
    assert.equal(3.50, newRadioBill.calRadioBillTotal());
  });
  it('nothing should be returned if call or sms is not selected');
});
