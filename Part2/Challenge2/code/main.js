function calcTip(bill){
  if(bill > 50 && bill < 300) return bill*0.15
  return bill*0.2
}

var bills = []
var tips = []
var total = []

var n = parseInt(prompt("Nhập số lượng bill: "))
for(var i=0;i<n;i++)
{
  bills[i] = parseFloat(prompt(`Nhập bill ${i+1}: `))
  tips[i] = calcTip(bills[i])
  total[i] = bills[i] + tips[i];
}
console.log('bills: ',bills)
console.log('tips: ',tips)
console.log('tota: ',total)