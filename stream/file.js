const fs = require('fs');
const path = require('path');

//创建一个 可读流
const readable = fs.createReadStream(
  path.resolve(__dirname, '../react/.babelrc')
);
//拿到标准输出
// console.log(readable);

//管道流向 进程的 标准输出流 将文件内容打印出来
readable.pipe(process.stdout)

readable.on('end',()=>{
  console.log('read end');
})


//创建一个 可写流

const writable = fs.createWriteStream(path.resolve(__dirname,'console.js'))

writable.write(
  `
    //创建一个 console.js 
    const name = "lijinke"
    console.log(name)
  `
)