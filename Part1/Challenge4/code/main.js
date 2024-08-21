var bill = parseInt(prompt('Số tiền'))
var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`Bill: ${bill}\nTip: ${tip}`)
console.log(`Total ${(bill+tip).toFixed(2)}`)