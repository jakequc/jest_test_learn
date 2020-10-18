import {
    fetchData,
    fetchPromiseData,
    fetchTestData,
    fetchNotExistURL_PromiseData
} from './fetchData'

// 异步的测试代码需要在测试主体函数的参数中加入（done），然后在匹配器之后加入done()
test('FetchData 方法测试', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            'success': true
        })
        done(); // 异步数据测试全部完成之后才会执行done
    })
})

/**
test('测试名称', () =>{
// 测试主体函数
})
 */

// 测试返回是promise的函数, 需要在测试主体中加入return的结果才行
test('fetchPromiseData 测试title', () => {
    return fetchPromiseData().then(res => {
        expect(res.data).toEqual({
            promiseData: 'promise Data'
        })
    })
})


// 当需要对返回的异常进行通过的时候，我们需要是用到jest提供的断言， 和return
test('fetchNotExistURL_PromiseData, expect.assertions(1)', () => {
    expect.assertions(1); // 测试中的断言，必须执行一次expect，才会通过
    return fetchNotExistURL_PromiseData()
        .catch(e => {
            expect(e.toString().indexOf('Error') > -1).toBe(true)
        })
})

// 对返回的promise，resolves后进行一个匹配
test('fetchTestData test', async() => {
    await expect(fetchTestData()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})

test('fetchFourData 测试', async() => {
    const response = await fetchTestData();
    expect(response.data).toEqual({
        success: true
    })
})