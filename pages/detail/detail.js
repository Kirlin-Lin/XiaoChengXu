// pages/detail/detail.js
var data = require("../../data/data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "https://sharefs.yun.kugou.com/202004141839/419f8aebe55f63abd9786f491c3ee5ee/G170/M07/16/11/SocBAF3H3aqAUYOEADmpdloW3bU827.mp3",
    datailData: {},
    // 详情中的图片上的小按钮
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收一下shouye传递过来的参数
    var id = options.id
    this.data.id = id
    // 根据下标来查找相对应的内容
    this.setData({
      datailData: data.postList[id]
    })
    console.log(this.data.datailData)

    // 进来之后先判断Storage中是不是存有这个值
    var collect = wx.getStorageSync('shoucang')
    if (collect) {
      // 收藏的是那篇文章
      var shouContent = collect[id]
      this.setData({
        tu: shouContent
      })
    } else {
      var collect = {}
      collect[id] = false
      wx.setStorageSync('shoucang', collect)
    }

    // 音乐
    // 使用 wx.createAudioContext 获取 audio 上下文 context，
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  // 音乐
  shipin: function () {
    // 判断是true或false
    this.setData({
      flag: !this.data.flag
    })

    var that = this.data.flag
    if (that) {
      // 播放音频
      this.audioCtx.play()
    } else {
      // 暂停音频
      this.audioCtx.pause()
    }
  },

  // 收藏
  shoucang: function (e) {
    var that = this
    // 从本地缓存中异步获取shoucang的内容
    wx.getStorage({
      key: 'shoucang',
      success(res) {
        // 获取Storag中的值
        // data：key对应的值
        var zhi = res.data

        var StoragZhi = zhi[that.data.id]
        console.log(that.data.id)
        console.log(zhi, StoragZhi)
        StoragZhi = !StoragZhi
        zhi[that.data.id] = StoragZhi
        that.setData({
          tu: StoragZhi
        })

        var title = StoragZhi ? '收藏成功' : '取消收藏'
        wx.showToast({
          title,
          icon: 'success',
          duration: 500
        })
        wx.setStorageSync('shoucang', zhi)
      }
    })
  },

  // 分享
  fenxiang: function (res) {
    wx.showActionSheet({
      itemList: ['分享到QQ空间', '分享到朋友圈'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 点击按钮分享
  btnZhuan(res) {
    console.log(res.currentTarget.dataset.id)
    // 分享产品的Id
    var id = res.currentTarget.dataset.id
    console.log(id)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发标题',
      path: `pages/detail/detail?id=${id}` // 分享后打开的页面
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})