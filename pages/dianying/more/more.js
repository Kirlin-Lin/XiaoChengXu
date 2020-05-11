// pages/dianying/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var id = options.id
    var dataUrl = "";
    var that = this
    switch (id) {
      case "1":
        dataUrl = "http://t.yushu.im/v2/movie/top250";
        break;
      case "2":
        dataUrl = "http://t.yushu.im/v2/movie/in_theaters";
        break;
      case "3":
        dataUrl = "http://t.yushu.im/v2/movie/coming_soon";
        break;
    }
    wx.request({
      url: dataUrl,
      success:function(res){
        console.log(res.data.subjects)
        
        that.setData({
          shuju : res.data.subjects
        })
        
      }
    })
  },
  // 点击跳到详情
  detail: function (e) {
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../dianying_detail/dianying_detail?id=' + id,
    })
  },
})