
import { assert, expect, should } from 'chai';

should();

describe('Chai Assertion Interfaces', () => {
    it('should test using Assert', () => {
        const actual = 10;
        assert.equal(actual, 10);
        assert.isAbove(actual, 5);
        assert.isTrue(actual > 0);
    });

    it('should test using Expect', () => {
        const actual = 'WebdriverIO';
        expect(actual).to.equal('WebdriverIO');
        expect(actual).to.be.a('string');
        expect(actual).to.include('Driver');
    });

    it('should test using Should', () => {
        const actual = [1, 2, 3];
        actual.should.have.lengthOf(3);
        actual.should.include(2);
        actual.should.be.an('array');
    });
});
