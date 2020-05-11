// pages/dianying/dianying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // value1:"你的名字",
    // 点击搜索
    sou: {},
    // 正在热映
    reying: {},
    // 即将上映
    shangying: {},
    // Top250
    top250: {},
    // 搜索面板显示
    searchShow: true,
    shuju: [],
    // 搜索页面的内容
    souYeContent: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:8001/movies',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          shuju: res.data.data
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },


  // 点击跳转详情
  detail: function (e) {
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './dianying_detail/dianying_detail?id=' + id,
    })
  },

  // 点击XX之后返回
  updataImg: function (e) {
    console.log(this.data.value1)
    console.log(e)
    this.setData({
      // value1: this.data.value1,
      searchShow: true
    })
    this.onLoad()
  },
  // 获得焦点
  onFocus: function () {
    console.log(123132)
    wx.request({
      url: 'http://t.yushu.im/v2/movie/search?q=',
      success: function (res) {
        console.log(res.data.subjects)
      }
    })
    this.setData({
      searchShow: false,
    })
  },
  // 失去焦点
  onBlur: function (e) {
    // console.log(e)
    console.log(e.detail.value)
    // // 获得输入的值
    var content = e.detail.value
    // 搜索：http://t.yushu.im/v2/movie/search?q=名字
    var that = this
    wx.request({
      url: "http://t.yushu.im/v2/movie/search?q=" + content,
      success: function (res) {
        // souYeContent
        that.setData({
          // searchShow: true,
          souYeContent: res.data.subjects
        })
      }
    })

  },
  // 点击更多
  gengduo: function (e) {
    var id = e.target.dataset.id
    console.log(id)
    wx.navigateTo({
      url: './more/more?id=' + id
    })
  }
})