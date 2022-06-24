const sqare = require("./sqare")

describe("sqare",()=>{
    test("корректное значение",()=>{
        expect(sqare(2)).toBe(4)
        expect(sqare(3)).toBeLessThan(10)//больше, чем
        expect(sqare(3)).toBeGreaterThan(8)//меньше, чем
        expect(sqare(2)).not.toBeUndefined()//не underfined
    })

})

