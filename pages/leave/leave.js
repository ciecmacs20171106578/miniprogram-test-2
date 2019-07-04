Page({
  data:{
    myinfo: {
      sname: "张欣鹏",
      studentid: "20171106578",
      syear: "2017级",
      sclass: "17软件工程",
      snumber: "15886077136",
      sday: "3天",
      sdays: "19.06.26-19.06.30",
      sso: "病假",
      steacher: "XXX",
      sin: "计算机科学技术学院",
    },
  },
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'myinfo',
      success: function(res) {
        that.setData({
          myinfo:res.data
        })
      },
    })
  },
    onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
