//index.js
//获取应用实例
// const app = getApp();
Page({
    data: {
        scrollTop: 0,
        indicatorDots: true,
        autoplay: true,
        interval: 4000,
        duration: 1000,
        imgUrls: [
            // "../../public/images/swiper-1.png",
            // "../../public/images/swiper-2.png",
            // "../../public/images/swiper-3.png",
            // "../../public/images/swiper-4.png"
        ],
        title:'热文推荐',
        more:'查看更多',
        content:[],
        apiUrl:'http://182.92.194.36/keith/queryList.php'
    },
    onLoad: function () {
        var that = this;
        wx.navigateBack({
            delta: 9
        })
        wx.request({
            url: this.data.apiUrl,
            data:{},
            header:{
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log(res);
                if (res.statusCode === 200) {
                    that.setData({
                        content: res.data,
                        imgUrls:res.data.map(function(v,i){
                            return {
                                id: v.id,
                                url: v.img
                            }
                        }).filter(function(v){
                            return v.url;
                        })
                    });
                }
            }
        })
    },
    changeToDetail: function (e) {
        wx.navigateTo({
            url: './detail?id=' + e.target.dataset.id,
        })
    },
    swiperTap:function(e){
        wx.navigateTo({
            url: './detail?id=' + e.currentTarget.dataset.id
        })
    }
})
