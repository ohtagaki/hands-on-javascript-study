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
console.log("---------代入演算子---------")
let sum = 15
console.log(sum)
sum += 17
console.log(sum)
sum += 35
console.log(sum)
let prod = 3
console.log(prod)
prod *= 4
console.log(prod)
prod *= 8
console.log(prod)

console.log("---------関係演算子---------")
console.log(6 * 7 < 7 * 9)
console.log(6 * 7 > 7 * 9)
console.log(6 * 11 <= 7 * 9)
console.log(6 *11 >= 7 * 9)


//2-9 長整数
console.log("---------長整数---------")
console.log(900000007199993205694821 + 1 == 900000007199993205694821 + 2)
console.log(900000007199993205694821n + 1n == 900000007199993205694821n + 2n)

console.log(7n + 35n)
console.log(102n - 35n)
console.log(14n * 35n)
console.log(1043n / 35n)
console.log(104n ** 3n)

//2-10 文字列
console.log("---------文字列---------")
console.log("He said \"I'm a teapot.\"")

console.log("---------文字列を取り出す---------")
console.log("Hi'roki"[2])
console.log("Hi'roki"[5])
console.log("Hi'roki"[-1])
console.log("Hi'roki"[10])


//2-11 テンプレート
console.log("---------テンプレート---------")
console.log(`tsthouga`)
const candidate = "Nekonira"
console.log(`${candidate}様`)

//2-12 配列
console.log("---------配列---------")
days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
console.log(`8月は${days[7]}日間です`)
console.log(`13月は${days[-1]}日間です`)

feb = days[1]
apr = days[3]
jun = days[5]

console.log(feb)
console.log([apr, jun])

// console.log("---------分割代入を用いた変数の入れ替え---------")
// let taki = "僕たち"
// let mitsuha = "私たち"
// console.log(taki)
// console.log(mitsuha)
// [taki, mitsuha] =[mitsuha, taki]
// console.log(taki)
// console.log(mitsuha)
