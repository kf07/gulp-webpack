//列挙型

enum Color {
    RED,
    GREEN,
    BLUE
}

console.log(Color.BLUE); //2

//例外処理

try {
    throw 'err';
}catch(e) {
    console.log(e) //err
}finally {

}


try {
    throw 'err';
}catch {
    console.log('hoge')
}finally {

}

//関数

//関数式
function add(a:number,b:number):number {
    return a + b;
}
console.log(add(1,2));


//戻り値なしの関数式
function shout(s:string):void {
    console.log(`${s}!`)
}
shout('hoge');

//関数リテラル
let hoge = function():void {
    console.log('hoge')
};
hoge();

//関数リテラル（アロー関数）
let fuga = (x:string):string => {
    return x + x;
};
console.log(fuga('piyo'));

function fnc():[string,string,number] {
    return ['hoge','fuga',999];
}
let tpl = fnc();
console.log(tpl);

//引数
//デフォルト値付き引数
function fnc1(x:number = 1) {
    return x + 1;
}

console.log(fnc1())


//オプション引数
function fnc2(x?:number):number {
    return 2* (x===undefined? 1:x);
}
console.log(fnc2());
console.log(fnc2(10));


//可変長引数

function fnc3(...x:number[]):number {
    let res:number = 0;
    x.forEach((i:number):void => {
        res += i;
    });

    return res;
}

console.log(fnc3());
console.log(fnc3(1, 2, 3));

//関数のオーバーロード
//オーバーロードする関数の宣言
function fnc01(x:string):string;
function fnc01(x:number,y:number):number;
function fnc01(x:boolean):void;

//オーバーロードされた関数の実装
function fnc01(x:any,y?:number):any {
    if(typeof x === 'string'){
        return `${x}!`
    } else if(typeof x === 'number') {
        return x + (y === undefined? 1:y);
    } else {
        if(x) console.log('fuga');
    }
}

console.log(fnc01('hoge'));
console.log(fnc01(1, 2));
fnc01(true);


//型アサーション
let val1:any = 'abcdeeee';
let len1:number = (<string>val1).length;
console.log(len1);

let val2:any = 'あいう';
let len2:number = (val2 as string).length;
console.log(len2);


//クラス定義

//クラス
class Cls {
    //コンストラクタ
    constructor(private _x:number,private _y:number) {
    }
    //ゲッタ/セッタ
    get x():number {
        return this._x;
    }

    set x(x:number) {
        this._x = x;
    }

    get y():number {
        return this._y;
    }
    set y(y:number) {
        this._y = y;
    }

    //メソッド
    calc(): void {
        console.log(this._x + this._y);
    }
}

//利用

let cls = new Cls(1,1);
cls.calc();
cls.x = 10;
cls.y = 11;
cls.calc();