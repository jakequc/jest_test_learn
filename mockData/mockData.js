/**
  the package of mockjs is used to create some fake data
 */
import Mock from 'mockjs'

const urlObj = {
    indexURL: '/',
    bookURL: '/data',
    testURL: '/test',
    promiseTestURL: '/promise',
    notExistURL: '/not_exist_URL'
}

Mock.mock(urlObj.notExistURL, {

})

// 当请求‘/book’的时候就会命中 该配置
Mock.mock(urlObj.bookURL, {
    'book|8': [{
        'id|+1': 1,
        'bookName': '@cname',
        'publishDate': '@date("yyyy-MM-dd")',
    }, ],
});

// 当请求的url为 '/test'的时候就会命中该配置
Mock.mock(urlObj.testURL, {
    success: true
})

Mock.mock(urlObj.promiseTestURL, {
    promiseData: 'promise Data'
})