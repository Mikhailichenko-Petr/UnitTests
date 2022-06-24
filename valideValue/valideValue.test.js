const validate = require("./valideValue")

test("валидация значения",()=>{
    expect(validate(70)).toBe(true)
})
describe("validateValue",()=>{
    test("меньше корректного значения",()=>{
        expect(validate(-1)).toBe(false)
    })
    test("пограничное значение снизу",()=>{
        expect(validate(0)).toBe(true)
    })
    test("корректное значение",()=>{
        expect(validate(70)).toBe(true)
    })
    test("погроничное значение сверху",()=>{
        expect(validate(100)).toBe(true)
    })
    test("больше корректного значения",()=>{
        expect(validate(101)).toBe(false)
    })
})

