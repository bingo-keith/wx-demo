//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [
            {
                imgUrl: '../../public/images/image-ui.png',
                title: 'UI设计',
                summary: '这是UI设计',
                category:'ui'
            },
            {
                imgUrl: '../../public/images/image-ui.png',
                title: '前端开发',
                summary: '这是前端开发这是前端开发这是前端开发这是前端开发这是前端开发这是前端开发这是前端开发这是前端开发这是前端开发',
                category:'fe'
            },
            {
                imgUrl: '../../public/images/image-ui.png',
                title: '后端开发',
                summary: '这是后端开发这是后端开发这是后端开发这是后端开发这是后端开发这是后端开发',
                category:'be'
            },
            {
                imgUrl: '../../public/images/image-ui.png',
                title: '行业资讯',
                summary: '这是行业资讯这是行业资讯这是行业资讯这是行业资讯这是行业资讯',
                category:'news'
            }
        ]
    },
    //事件处理函数
    bindViewTap: function (e) {
        wx.navigateTo({
            url: '../index/list?category=' + e.currentTarget.dataset.category
        })
    },
    onLoad: function () {
    }
})
