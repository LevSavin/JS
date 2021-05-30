describe("Соответствие значений",()=>{
    it('Проверка переменной х на значение 20',()=>{
        let x = 20;
        expect(x).toBe(20);
        x = 10;
        expect(x).toBe(10);
    })
})

describe("Дополнительные функции",()=>{
    it("Сравнение объектов",()=>{
        let testGo = ()=>{};
        let user1 = {
            name:'John',
            age:25,
            go:testGo
        }
        let user2 = {
            name:'John',
            age:25,
            go:testGo
        }
        expect(user1).toEqual(user2);
    });

    it('regExp ', () => {
        let str = "Test AbcD jasmine";
        expect(str).toMatch(/abcd/i);
    });
    it('Arrays',() => {
        let arr = ['black','white'];
        expect(arr).toContain('white');
    });
})