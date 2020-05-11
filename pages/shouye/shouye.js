var data = require("../../data/data")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    //轮播图
    imgurl: [{
        imgs: 'http://img2.imgtn.bdimg.com/it/u=3894392280,2091123732&fm=26&gp=0.jpg'
      },
      {
        imgs: 'http://img5.imgtn.bdimg.com/it/u=4103960647,2309288036&fm=26&gp=0.jpg'
      },
      {
        imgs: 'http://img5.imgtn.bdimg.com/it/u=15176420,1605298065&fm=26&gp=0.jpg'
      }
    ],
    indicatorDots: true,
    // 滑动方向是否为纵向
    vertical: false,
    // 是否自动切换
    autoplay: true,
    // 自动切换时间间隔
    interval: 2000,
    // 滑动动画时长
    duration: 500,
    // 是否衔接滑动
    circular: true
  },

  // 点击跳转到详情 
  detail: function (e) {
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("1111onLoad")
    var that = this
    // 请求接口
    wx.request({
      url: 'http://localhost:8001/list',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // this在这里会漂移
        that.setData({
          shuju: res.data.data
        })
      }
    })
  },

  imgDateil: function () {

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //上拉加载
    wx.showLoading({
      title: '正在加载',
    })
    var that = this
    //从接口获取数据
    wx.request({
      url: 'http://127.0.0.1:8001/list',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        if (res.data.data != undefined) {
          console.log('我不是undefind')
          //组合获取的数据
          for (var i = 0; i < res.data.data.length; i++) {
            that.data.shuju.push(res.data.data[i])
          }
          //往前台传递数据
          that.setData({
            shuju: that.data.shuju
          })
        } else if (res.data.data == undefined) {
          console.log('我是undefind')
          wx.showLoading({
            title: '加载完毕',
          })
        }
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})