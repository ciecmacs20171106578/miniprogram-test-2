Page({
  data:{
    myinfo:{
      sname:"张欣鹏",
      studentid:"20171106578",
      syear:"2017级",
      sclass:"17软件工程",
      snumber:"15886077136",
      sday:"3天",
      sdays:"19.06.26-19.06.30",
      sso:"病假",
      steacher:"XXX",
      sin:"计算机科学技术学院",
    },
    dateinof:""
  },
  submit_button:function(){
    console.log("click")
    wx.setStorage({
      key: 'myinfo',
      data: this.data.myinfo,
    })
  },
  input:function(e){
    console.log(e.detail.value)
    console.log(e.currentTarget.dataset.dateinfo)
    var str = "myinfo." + e.currentTarget.dataset.dateinfo
    this.setData({
      [str]: e.detail.value
    })
  }
});