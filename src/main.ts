'use strict';
// const data = [56,40,26,82,19,17,73,99];
// let [x0,x1,x2,...other] = data;
//
// let x = 1;
// let y = 2;
// [x,y] = [y,x];
// console.log(x,y);
//
// let book = { title:'Javaポケットリファレンス',publish:'技術評論社'};
// let { title:name,publish:company } = book;
// console.log(name);
// console.log(company);
//
// let price,title,memo;
// ({price,title,memo='なし'} = book);

// console.log(1 == true);
//
// const data1 = ['JavaScript','Ajax','ASP.NET'];
// const data2 = ['JavaScript','Ajax','ASP.NET'];
//
// console.log(data1 === data2);
//
// console.log('3.14E2' === 314);
//
// const x = 50;
//
// console.log((x >= 70) ? '合格' : '不合格');
//
// const z = 1;
// const y = 2;
// console.log(z === 1 || y === 1);
//
// const x = 2;
//
// if(x === 2){
//     console.log(('こんにちは'));
// }
//
// x === 1 && console.log('こんにちは');
//
// const msg = '';
// msg = msg || 'こんにちは、世界！';
// console.log(msg);
//
//
// const ary = ['JavaScript','Ajax','ASP.NET'];
// console.log(delete ary[0]);
// console.log(ary);
//
// const obj = {x:1,y:2};
//
// console.log(delete obj.x);
// console.log(obj.x);

// const data1 = 1;
// console.log(delete data1);
// console.log(data1);
//
//
// data2 = 10;
// console.log(delete data2);
// console.log(data2);

// var num = 1;
// console.log(typeof num);
//
// var str = 'こんにちは';
// console.log(typeof str);

// const x = 9;
// if(x >= 10)
//     console.log('変数xは10以上です。');
// else
//     console.log('変数は10未満です。');

// let x = 10;
// while(x<10) {
//     console.log('xの値は' + x);
//     x++;
// }

// var data = {apple:150,orange:100,banana:120};
// for (var key in data){
//     console.log(key + '=' + data[key]);
// }

// const data = ['apple','orange','banana'];
// Array.prototype.hoge = function () {}
//
// for (let value of data){
//     console.log(value)
// }
//
// let result = 0;
// for(var i = 1; i <= 100; i++){
//     result += i;
//     if(result > 1000) {break;}
// }
//
// console.log('合計値が1000を超えるのは' + i)

// kuku:
// for(var i = 1;i<10; i++){
//     for(var j =1; j<10; j++){
//         var k = i * j;
//         if(k>30){break kuku;}
//         document.write(k + '&nbsp');
//     }
//     document.write('<br />');
// }

var i = 1;
try {
    i = i * j;
} catch(e) {
    console.log('例外');
} finally {
    console.log('処理は完了しました。');
}

var x = 1;
var y = 0;

try {
    if(y ===0) {
        throw new Error('0で除算しようとしました。');
    }
    var z = x/y;
}catch (e) {
    console.log(e.message)
}