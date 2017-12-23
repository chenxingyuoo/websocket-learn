/**
 * Created on 2017/12/20.
 */

'use strict';

const express = require('express');
const http = require('http');
const url = require('url');
const path = require('path');
const WebSocket = require('ws');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server : server });

let data = [
  {
    name : '如花',
    text : 'hello',
    pos : 'left'
  },
  {
    name : '如梦',
    text : 'hi',
    pos : 'right'
  },
  {
    name : '如花',
    text : '今天天气好好哦，我们出去耍一下吧',
    pos : 'left'
  },
  {
    name : '如梦',
    text : '好啊好啊',
    pos : 'right'
  }
];

let num = 0;

//连接
wss.on('connection', (ws, req) => {
  //接受客户端信息回调 
  ws.on('message', (message) => {
    console.log('received: %s', message);

    num++;

    //向客户端发送一条信息
    ws.send(JSON.stringify([{
      name : '如花',
      text : `hi${num}`,
      pos : 'left'
    }]));
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