var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some text';
        var message = generateMessage(from, text);


        expect(message).toInclude({from, text});
    });

});