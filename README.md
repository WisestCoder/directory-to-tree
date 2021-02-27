## 根据目录生成字符串树🌲

[![NPM version](https://img.shields.io/npm/v/@wisestcoder/directory-to-tree.svg?style=flat)](https://npmjs.org/package/directory-to-tree)
[![npm](https://img.shields.io/npm/dt/@wisestcoder/directory-to-tree.svg)](https://npmjs.org/package/directory-to-tree)
[![GitHub stars](https://img.shields.io/github/stars/WisestCoder/directory-to-tree.svg?style=social&label=Star)](https://github.com/WisestCoder/directory-to-tree)
[![GitHub forks](https://img.shields.io/github/forks/WisestCoder/directory-to-tree.svg?style=social&label=Fork)](https://github.com/WisestCoder/directory-to-tree)

### Demo
可以根据目录生成如下所示的字符串树
```txt
directory-to-tree
├-- README.md
├-- bin
│   └-- tree.js
├-- index.js
├-- lib
│   ├-- directoryToObject.js
│   ├-- matrixToTree.js
│   └-- objectToMatrix.js
├-- node_modules
├-- package.json
└-- test
    └-- test.spec.js
```

### 安装

```bash
npm install @wisestcoder/directory-to-tree -g
```

### 使用

```bash
tree  # 会读取当前目录并生成字符串树

tree -d /home/.../[一个有效的目录路径]  # 会读取指定目录并生成字符串树

tree -depth 5[一个整数]  # 设置遍历的深度

tree -exclude /node_modules/[一个正则] # 设置忽略的目录

tree -extensions /\.txt$/[一个正则]  # 设置只想读取的文件

tree -to /home/.../[一个有效的目录路径]  # 设置字符串树生成的文件
```
