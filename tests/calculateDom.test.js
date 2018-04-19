//Writing tests for calculate Bill function
describe('calculate Bill wiget tests', function(){
  it('should return amount of a call if its only one call', function(){
    assert.equal(totalPhoneBill('call'),2.75);
  });
  it('should return amount of sms if its only one sms', function(){
    assert.equal(totalPhoneBill('sms'),0.75);
  });
  it('should return total amount of both call and sms', function(){
    assert.equal(totalPhoneBill('call, sms'),3.50);
  });
  it('should return nothing if there are no call or sms');
});
