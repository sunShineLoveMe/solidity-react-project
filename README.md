# 本工程是以太坊全栈开发指南

## 涉及的技术栈有：
1. solidity
2. hardhat
3. Infura 
3. react
4. 一些js的中间件

## 环境搭建准备:
1. npm 或者yarn
2. solidity 在线编译工具remix
3. metamask钱包，同时准备基于测试网的测试币

## 编译命令
### 编译智能合约生成ABI
npx hardhat compile

### 启用本地节点-同时生成一批用来测试的账号和地址，以后是将这些账号导入Metamask中
npx hardhat node

### 合约部署在本地/测试网
npx hardhat run scripts/deploy.js --network localhost/ropsten\

### react前端启动
npm start




