## build

```bash
npm install
node server.js
```
### 预览
![图片](https://github.com/chenxingyuoo/markdown-image/blob/master/skill/websocket.jpeg?raw=true)

> 引用ws模块连接WebSocket, 详情：https://www.npmjs.com/package/ws

### 服务端核心代码
```js
const WebSocket = require('ws');
const express = require('express');

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server : server });

//连接
wss.on('connection', (ws, req) => {
  //接受客户端信息回调 
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  //连接关闭回调
  ws.on('close', (message) => {
    ws.close();
  });

  //连接错误回调
  ws.on('error', (message) => {
    ws.close();
  });

  //向客户端发送一条信息
  ws.send(JSON.stringify(data));
});

server.listen(3001, () => {
  console.log('Listening on localhost:' + server.address().port);
});

```

### 客户端代码
```js
    if ('WebSocket' in window) {
      window.ws = new WebSocket("ws://localhost:3001?token=237498");
      console.log('client connection');
    } else {
        alert('不支持WebSocket');
        return;
    }

    //接受服务器消息回调
    ws.onmessage = (evt) => {
      console.log("Received Message: " + JSON.stringify(evt.data)));
    };

    //连接成功打开状态回调
    ws.onopen = (evt) => {
      console.log("Connection open ...");
    };

    //连接关闭状态回调
    ws.onclose = () => {
      console.log("Connection closed.");
    };

    //连接错误状态回调
    ws.onerror = () => {
      console.log("Connection error.");
    };
```