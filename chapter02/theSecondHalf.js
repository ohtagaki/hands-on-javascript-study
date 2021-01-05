//2-5 undefined
let boundless
console.log(boundless)

//2-6 Null
let detectedItem = null
console.log(detectedItem)

//2-7 真偽値
//論理演算子
console.log("---------論理AND演算子---------")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log("---------論理OR演算子---------")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//論理演算
console.log("---------論理演算---------")
console.log((true || false) && (true || false))
console.log((true && false) || (true && false))

//真偽値以外に論理演算子を適用
console.log("---------真偽値以外に論理演算子を適用---------")
console.log("string" && true)
console.log(true || 3456)
console.log(3456 || true)

console.log("---------論理NOT演算子---------")
console.log(!0)
console.log(!null)
console.log(!"文字列")
console.log(!!0)
console.log(!!null)
console.log(!!"文字列")

console.log("---------二項論理演算子の処理---------")
true && console.log("ねこにらねこにらⅠ")
console.log("ねこにらねこにらⅡ") && false
false && console.log("ねこにらねこにらⅢ")

//Null合体演算子
console.log("---------Null合体演算子---------")
//let num = promptInt("整数を入力してください") ?? -9999
//console.log(num)

console.log("---------厳密な等価演算子---------")
console.log(1 === 1)
console.log(1 === 2)
console.log(1 === "1")
console.log(1 === true)

console.log("---------厳密な不等価演算子---------")
console.log(2 !== 2)
console.log(2 !== 3)
console.log(2 !== "2")
console.log(2 !== true)

console.log("---------抽象的な等価演算子---------")
console.log(1 == 1)
console.log(1 == 2)
console.log(1 == "1")
console.log(1 == "2")
console.log(1 == true)

console.log("---------抽象的な不等価演算子---------")
console.log(2 != 2)
console.log(2 != 3)
console.log(2 != "2")
console.log(2 != "3")
console.log(2 != true)
console.log(2 != false)

//2-8 数値
console.log("---------数値---------")
console.log(45)
console.log(3874254)
console.log(-9874)
console.log(.1985)

console.log("---------指数表記---------")
console.log(0.000000000000045)
console.log(typeof 0.000000000000045)
console.log(4.5e-14 === 0.000000000000045)

console.log(67000000000000000000000000)
console.log(typeof 67000000000000000000000000)
console.log(6.7e+25 === 67000000000000000000000000)

console.log("---------10進数以外の数---------")
console.log(0b101011) //2進数
console.log(064) //8進数
console.log(0x25) //16進数

console.log("---------数値演算---------")
console.log(104 + 395)
console.log(39 - 21)
console.log(98 * 7)
console.log(105 / 6)
console.log(109 % 5)
console.log(45 * 12  + 76)
console.log(-604 % 32)
console.log(12.05 ** 4) ///べき乗演算
console.log(50 -+- 59 +-+ 12) //単項加算演算子・単項負値演算子

console.log("---------bit演算---------")
