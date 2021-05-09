const pow = require("../pow");
describe("Тестирование модуля возведение в степень",()=>{
    it('2 ^ 3',()=>{
        expect(pow(2,3)).toBe(8);
    })
    it('3 ^ 3',()=>{
        expect(pow(3,3)).toBe(27);
    })
    it('2 ^ 0',()=>{
        expect(pow(2,0)).toBe(1);
    })
    it('0 ^ 0',()=>{
        expect(pow(0,0)).toBe(1);
    })
})
