import People from './People'

const people = new People();

describe('最外层父级分组', () => {
  // beforeAll(() => {
  //   console.log('这句话在所有的测试用例之前执行，before')
  // })

  beforeEach(() => {
    console.log('beforeEach_______________________回调函数里的内容会在每个测试test用例之前执行一遍')
  })

  afterEach(() => {
    console.log('afterEach_______________________回调函数里的内容都会在每个测试test用例之后都执行一遍');
  })


  describe('describe可以进行分组，这里是子集分组1:', () => {
    afterEach(()=> {
      console.log('after for child ___________ 要吃饭.....');
    })
    
    test.only('测试小孩醒没有醒', () => {
      people.isChild(1)
      people.wakeUp()
      console.log(people.action);
      expect(people.action).toEqual('小孩醒了')
    })

    test('测试2 小孩', () => {
      people.isChild(1)
      people.brushTeeth();
      console.log(people.action)
      expect(people.action).toEqual('小孩刷牙了')
    })
  })

  describe('describe 子集分组2: ', () => {

    afterEach(()=> {
      console.log('大人醒了，要去拯救世界.....');
    })

    test('测试 2 大人', () => {
      people.isChild(2);
      people.fallingSleep();
      console.log(people.action);
      expect(people.action).toEqual('大人睡着了')
    })


    test('测试4 大人', () => {
      people.isChild(2)
      people.batheDone();
      console.log(people.action);
      expect(people.action).toEqual('大人洗好澡了')
    })
  })

  afterAll(() => {
    console.log('不论afterAll写在哪里，afterAll里边的回调函数的内容会在所有的测试用例都结束后在执行....');
  })
})