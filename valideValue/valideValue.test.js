const validate = require("./valideValue")

test("валидация значения",()=>{
    expect(validate(70)).toBe(true)
})