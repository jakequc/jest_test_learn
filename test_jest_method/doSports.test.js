// const baojian = require('./dabaojian')
// const {
//   palyWhatSport,
//   languageLearning
// } = baojian

import { palyWhatSport, languageLearning } from './doSports'


test("sports 测试1: 300元", () => {
    expect(palyWhatSport(300)).toBe('游泳')
})

test("sports 测试2: 3000元", () => {
    expect(languageLearning(3000)).toBe('中文')
})