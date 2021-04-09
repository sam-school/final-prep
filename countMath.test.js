const { multipleOfTen} = require('./multipleOfTen.js');

test('Multiples of 10:', () => {
    for(var i = 0; i < 100; i ++) {
        if(i % 10 == 0) {
            expect(multipleOfTen(i)).toBe(i + ' is multiple of 10');
        }else {
            expect(multipleOfTen(i)).toBe(i);
        }
    }
});