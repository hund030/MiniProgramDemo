// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
      var plugin = requirePlugin("chatbot");

      plugin.init({
          appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja",
          openid: "oB6jg6ENstneouhXefbujwJl7v2n", // 小程序的openid，必填项
          userHeader: "", // 用户头像,不传会弹出登录框
          userName: "", // 用户昵称,不传会弹出登录框
          anonymous: false, // 是否允许匿名用户登录，版本1.2.9后生效, 默认为false，设为true时，未传递userName、userHeader两个字段时将弹出登录框
          success: () => {},
          fail: (error) => {},
      });
    }

    this.globalData = {};
  }
});
