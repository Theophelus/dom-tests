describe('text bill widget tests', function(){
  it('should return call amount if its call only', function(){
    var functionCall = factoryTextBill()
    functionCall.call('call')
    assert.equal(2.75, functionCall.returnTextCallTotal());
  });
  it('shouldd return cost of an sms if its sms only', function(){
    var functionCall = factoryTextBill();
    functionCall.sms('sms');
    assert.equal(.75, functionCall.returnTextSmsTotal());
  });
  it('should return grand total for both call and sms', function(){
    var functionCall = factoryTextBill();
    functionCall.call('call');
    functionCall.sms('sms');
    assert.equal(3.50, functionCall.grandTotal());
  });
  it('should return nothing if empty');
});
