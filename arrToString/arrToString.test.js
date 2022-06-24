const arrToString = require("./arrToString")

describe("arrToString",()=>{
    test("корректное значение",()=>{
        expect(arrToString([1,2,3])).toEqual(["1","2","3"])
    })
    test("Добавляем лишнее",()=>{
        expect(arrToString([1,2,3,undefined,null,'2222'])).toEqual(["1","2","3"])//undefined,null,'2222' отфильтровалось
    })
    test("пустой массив",()=>{
        expect(arrToString([])).toEqual([])
    })
    test("отрицание",()=>{
        expect(arrToString([1,2,3])).not.toEqual([1,2,3,4])//not отрицание
    })
})

