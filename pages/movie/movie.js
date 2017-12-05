// pages/movie/movie.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData:[],
    goData:[],
    top250Data:[],
    searchValue:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/text' // 默认值
      },
      method:"GET",
      success: function (res) {
        that.setData({
          hotData:res.data.subjects
        })
        // var hotData = JSON.stringify(res.data.subjects);
        // wx.setStorage({
        //   key: 'hotData',
        //   data: hotData,
        // })
      }
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/text' // 默认值
      },
      method: "GET",
      success: function (res) {
        that.setData({
          goData: res.data.subjects
        })
        // var goData = JSON.stringify(res.data.subjects);
        // wx.setStorage({
        //   key: 'goData',
        //   data: goData,
        // })
      }
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/text' // 默认值
      },
      method: "GET",
      success: function (res) {
        that.setData({
          top250Data: res.data.subjects
        })
        // var top250Data = JSON.stringify(res.data.subjects);
        // wx.setStorage({
        //   key: 'top250Data',
        //   data: top250Data,
        // })
      }
    })
  },
  // 获取搜索矿中的值
  getMoviesearchValue(e){
    this.setData({
      searchValue: e.detail.value
    })
  },
  // 跳转到moviesearch页面
  moviesearch(){
    var obj = {};
    var id = this.data.searchValue.trim();
    obj.type = "searchId"
    obj.info = id;
    obj = JSON.stringify(obj)
    if (this.data.searchValue.length == 0 ){
      return;
    }else {
      wx.setStorage({
        key: 'id',
        data: obj,
      })
      wx.navigateTo({
        url: '../movieList/movieList',
      })
    }
  },
  // 键盘 enter事件
  searchSubmit(){
   console.log(1)
  },
  // 点击更多 跳转movieList
  gomovieList(id){
    console.log(id.currentTarget)
    var obj = {};
    obj.type = id.currentTarget.id;
    obj.info = "more"
    obj = JSON.stringify(obj)
    wx.setStorage({
      key: 'id',
      data: obj,
    })
    wx.navigateTo({
      url: '../movieList/movieList',
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