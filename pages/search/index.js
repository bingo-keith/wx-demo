//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        findItems: [
            {
                itemSrc: '../../public/images/image-ui.png',
                itemName: '随机'
            },
            {
                itemSrc: '../../public/images/image-ui.png',
                itemName: '热门'
            },
            {
                itemSrc: '../../public/images/image-ui.png',
                itemName: '标签'
            }
        ]
    },
    test:function(){


        wx.requestPayment({
            'timeStamp': '',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function (res) {
                console.log(res)
            },
            'fail': function (res) {
            }
        })
    }
})
