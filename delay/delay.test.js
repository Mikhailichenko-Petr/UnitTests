const delay = require("./delay")

describe('delay',()=>{
    test('корректное значение',async()=>{
        const sum = await delay(()=>20+20,1000)
        expect(sum).toBe(40)
    })
})