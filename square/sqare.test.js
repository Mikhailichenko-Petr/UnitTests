const sqare = require("./sqare")

describe("sqare",()=>{
    let mockValue
    //перед каждым тестом 
    beforeEach(()=>{
        // mockValue = Math.random()
    })
    //только один раз перед всеми тестами
    beforeAll(()=>{

    })
    test("корректное значение",()=>{
        // expect(sqare(2)).toBe(4)
        // expect(sqare(3)).toBeLessThan(10)//больше, чем
        // expect(sqare(3)).toBeGreaterThan(8)//меньше, чем
        // expect(sqare(2)).not.toBeUndefined()//не underfined
        const spyMathPow = jest.spyOn(Math,'pow')
        sqare(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test("корректное значение 2",()=>{
        const spyMathPow = jest.spyOn(Math,'pow')
        sqare(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
    afterEach(()=>{
        jest.clearAllMocks()
    })
    afterAll(()=>{

    })
})

