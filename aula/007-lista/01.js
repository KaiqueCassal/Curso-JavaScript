let num = [5, 8, 7, 4]

console.log(num)

num[4] = 9
num.push(1)

console.log(num)

console.log(num.length)
console.log(num.sort())

pos = 1

while(pos <= num.length){
    console.log(num[pos])
    pos++
}