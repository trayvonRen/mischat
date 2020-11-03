## User

```js
{
  _id: '',
  nickname: '',   // 昵称
  age: '',        // 年龄
  sex: '',
  email: '',      // 邮箱，唯一主键
  password: '',
  introduction: '',
  company: '',
  headportrait: ''  // 头像
  friend: [UserId, UserId, UserId],
  joingroup: [GroupChatId]  // 加入的群聊
}
```

## Friendgroup

```js
{
  _id: '',
  groupName: '',
  owner: UserId,
  groupMember: [UserId, UserId, UserId]
}
```

## GroupChat

```js
{
  _id: '',
  groupName: '',
  mermberList: [UserId, UserId, UserId],
  headportrait: '',
  leader: UserId,
  message: [MessageId]
}
```

## Message

```js
{
  _id: '',
  messageType: '',        // 消息的类型， 支持文字，图片，视频，音频，文件
  message: '',
  owner: UserId,
  time: ''
}
```
