//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        apiUrl: 'http://182.92.194.36/keith/queryList.php',
        content: []
    },
    onLoad:function(option){
        var that = this;
        wx.request({
            url: this.data.apiUrl,
            data: {
                category: option.category,
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log(res);
                if (res.statusCode === 200) {
                    that.setData({
                        content: res.data
                    });
                } else {
                    console.log(res)
                }
            }
        })
    },
    changeToDetail: function (e) {
        wx.navigateTo({
            url: './detail?id=' + e.target.dataset.id,
        })
    }
})
