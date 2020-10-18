test("toBe()匹配器对应的是js中的Object.is()", () => {
  // toBe 对应js中的 Object.is(a,b), +0和-0不相等，NaN和NaN相等
  expect("007号技师").toBe("007号技师")

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
  expect(obj).toBeNull(null)
})