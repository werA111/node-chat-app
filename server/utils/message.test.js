var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some text';
        var message = generateMessage(from, text);


        expect(message).toInclude({from, text});
    });

});

describe('generateLocationMessage', () => {
  it('shoud generate correnct location object', () => {
    var from = 'Admin';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({from, url});
  });
});
