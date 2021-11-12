import {mult, splitIntoWords, sum} from "./01";

//data

let a: number;
let b: number;
let c: number;

beforeEach( () => { // перед каждым тестом выполни:
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be correct', () => {

    //action
    const result1 = sum(a,b)
    a = 100
    const result2 = sum(a,b)
    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(102)
})

test('multiply should be correct', () => {

    //action
    const result1 = mult(a,b)
    const result2 = mult(b,c)
    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', () => {
    const sent_1 = 'Hello my friend!'
    const sent_2 = 'JS - the best  programming language'
    //
    const result_1 = splitIntoWords(sent_1)
    const result_2 = splitIntoWords(sent_2)
    //
    expect(result_1.length).toBe(3)
    expect(result_1[0]).toBe('hello')
    expect(result_1[1]).toBe('my')
    expect(result_1[2]).toBe('friend')

    expect(result_2.length).toBe(5)
    expect(result_2[0]).toBe('js')
    expect(result_2[1]).toBe('the')
    expect(result_2[2]).toBe('best')
    expect(result_2[3]).toBe('programming')
    expect(result_2[4]).toBe('language')
})