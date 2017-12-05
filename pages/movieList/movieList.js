// pages/movieList/movieList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'id',
      success(res){
        var id = JSON.parse(res.data)
        console.log(id)
        if(id.type == "searchId"){
          console.log("searchId")
          wx.request({
            url: 'https://api.douban.com/v2/movie/search?q='+ id.info, //仅为示例，并非真实的接口地址
            header: {
              'content-type': 'application/text' // 默认值
            },
            method: "GET",
            success: function (res) {
              that.setData({
                movieList: res.data.subjects
              })
            }
          })
        } 
        else if (id.type == "hotData"){
          wx.request({
            url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
            header: {
              'content-type': 'application/text' // 默认值
            },
            method: "GET",
            success: function (res) {
              that.setData({
                movieList: res.data.subjects
              })
            }
          })
        }
        else if (id.type == "goData") {
          wx.request({
            url: 'https://api.douban.com/v2/movie/coming_soon', //仅为示例，并非真实的接口地址
            header: {
              'content-type': 'application/text' // 默认值
            },
            method: "GET",
            success: function (res) {
              that.setData({
                movieList: res.data.subjects
              })
            }
          })
        }
        else if (id.type == "top250Data") {
          wx.request({
            url: 'https://api.douban.com/v2/movie/top250', //仅为示例，并非真实的接口地址
            header: {
              'content-type': 'application/text' // 默认值
            },
            method: "GET",
            success: function (res) {
              that.setData({
                movieList: res.data.subjects
              })
            }
          })
        }
      }
    });
  },
  // 跳转 详情页面
  goContent(event){
    var id = event.currentTarget.id;
    console.log(id)
    wx.setStorage({
      key: 'movieContentId',
      data: id,
    })
    wx.navigateTo({
      url: '../movieContent/movieContent',
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