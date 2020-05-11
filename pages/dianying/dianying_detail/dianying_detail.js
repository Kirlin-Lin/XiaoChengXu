// pages/dianying/dianying_detail/dianying_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var id = options.id
    var url = "http://t.yushu.im/v2/movie/subject/" + id;
    var that = this
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          shuju: res.data
        })
      }
    })
  },
  // 点击之后图片变大
  // wx.previewImage
  // 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
  bianDa: function () {
    var ImgUrl = this.data.shuju.images.large
    wx.previewImage({
      current: ImgUrl, // 当前显示图片的http链接
      urls: [ImgUrl] // 需要预览的图片http链接列表
    })
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