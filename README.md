# FakeCouldMusicM

仿网易云移动端 h5 页面,Vue3 实现

## 后端 API

[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

[码农实验室-免费 IP 查询接口](https://www.fkcoder.com/)

## 实现功能

|     功能     | 完成情况 |
| :----------: | :------: |
|    登录页    |    ✔️    |
|    侧边栏    |    ✔️    |
|  个人信息页  |    ✔️    |
| 个人信息编辑 |    ❌    |
|   歌单页面   |    ✔️    |
| 音乐播放底栏 |    ❌    |

## 运行

先克隆到本地

```bash
git clone https://github.com/9WiSHao/FakeCouldMusicM.git
```

安装依赖

```bash
npm install
```

启动

```bash
npm run dev
```

## 吐槽

NeteaseCloudMusicApi 这个 API 实在是东一块西一块的，拼出来个页面的内容难死我了，一个页面找六七个接口，有种屎里淘金的美。

这也就是为啥主页加载好几秒，有几个接口的请求还互相依赖，请求完一个才能请求下一个

然后有几个接口间歇性挂逼，评论接口就是，所以主页有的时候能获取到评论有的时候不行

网上找了个城市地区代码转城市名的库，还有查询 IP 所在地的接口，用于处理接口后端信息
