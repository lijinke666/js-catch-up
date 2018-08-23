/**
 * @name Duplex
 * @description 可读可写流
 */


const {
  Duplex
} = require('stream')

class MyDuplex extends Duplex {
  constructor(data){
    super()
    this.data = data
  }
  _read(){
    console.log('read');
  }
  _write(data, encode, next){
    process.stdout.write(data.toString())
    process.nextTick(next)
  }
}

const myDuplex = new MyDuplex()

//往 可读流 添加数据
myDuplex.push('a')
myDuplex.push('b')
myDuplex.push(null)

//往 可写流 添加数据
myDuplex.write('hello \n')
myDuplex.write('world \n')
myDuplex.end()


myDuplex.on('data',(data)=>{
  console.log('data:', data.toString());
})
myDuplex.on('finish',()=>{
  console.log('finish');
})