test("toBe()匹配器对应的是js中的Object.is()", () => {
    // toBe 对应js中的 Object.is(a,b), +0和-0不相等，NaN和NaN相等
    expect("mathers").toBe("mathers")

})

test("toEqual()匹配器可以让检查两个对象的值是否相等", () => {
    // toEqual()会递归的检查每个对象或者是数组的字段是否相等
    const obj = {
        name: 'jake'
    }
    obj['age'] = 23
    expect(obj).toEqual({
        name: 'jake',
        age: 23
    })
})

test('toBeNull()只有null的时候才能匹配', () => {
    const obj = null;
    expect(obj).toBeNull()
})


test('toBetruthy', () => {
    const ok = true;
    expect(ok).toBeTruthy()
})

test('toBeFalsy', () => {
    const count = false;
    expect(count).toBeFalsy()
        // expect(count).toBeTruthy()
        // expect(count).toBeTruthy()
})

test('toBeGreaterThan匹配器', () => {
    const a = 3;
    // 期望a比1大，如果为true就是pass的
    expect(a).toBeGreaterThan(1)
})

test('toBeLessThan mather', () => {
    const count = 10;
    expect(count).toBeLessThan(11)
})

test('toBeGreaterThanOrEqual匹配器', () => {
    const count = 10
    expect(count).toBeGreaterThanOrEqual(8)
})


test('mathers, toBeNull, toBeDefined, toBeUndefined', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
})


test('String mathers', () => {
    expect('teams').not.toMatch(/I/);
});

test('but there is a "stop" in Christopn', () => {
    expect('Christoph').toMatch(/stop/)
})

const shoppingList = [
    'jake',
    'longyu',
    'saylin',
    'jakequc',
    'keaho',
]

test('Arrays and iterable', () => {
    expect(shoppingList).toContain('longyu');
    expect(new Set(shoppingList)).toContain('jake')
})


function compileAndroidCode() {
    throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK')
    expect(compileAndroidCode).toThrow(/JDK/)
})

test('toBeCloseTo 可以让我们避免浮点数加法运算错误', () => {
    const one = 0.1;
    const two = 0.2;
    // expect(one+two).toBe(0.3) // 测试不通过，因为浮点数运算的时候不会太精确
    expect(one + two).toBeCloseTo(0.3)
})