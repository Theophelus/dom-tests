describe('Bill With Settings Widget Tests', function(){
  it('should return call cost', function(){
    var newUpdateSettings = UpdateSettings();
    newUpdateSettings.callSettingsFunc(1);
    assert.equal('1', newUpdateSettings.returnCallSettings());
  });
  it('should return sms cost', function(){
    var newUpdateSettings = UpdateSettings();
    newUpdateSettings.smsSettingsFunc(1);
    assert.equal('1', newUpdateSettings.returnSmsSettings());
  });

  it('should return call total if call radio button is checked and update total', function(){
    var newBillSettings = BillSettings();
    newBillSettings.radCallFunc('call');
    assert.equal(newUpdateSettings.returnSmsSettings(), newBillSettings.returnCall());
  });
  it('should return sms total if sms radio button is checked and update total', function(){
    var newBillSettings = BillSettings();
    newBillSettings.radCallFunc('sms');
    assert.equal(newUpdateSettings.returnSmsSettings(), newBillSettings.returnSms());
  });
  it('should return calls and sms total amount', function(){
    var newBillSettings = BillSettings();
    newBillSettings.radCallFunc('call');
    newBillSettings.radSmsFunc('sms');
    assert.equal('', newBillSettings.settingsTotal());
  });
  it('should return nothing if both radio buttons are not checked');
});
