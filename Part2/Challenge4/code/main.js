function calcTip(bill){
  if(bill > 50 && bill < 300) return bill*0.15
  return bill*0.2
}

var bills = []
var tips = []
var total = []

var n = 10
for(var i=0;i<n;i++)
{
  bills[i] = parseFloat(prompt(`Nhập bill ${i+1}: `))
  tips[i] = calcTip(bills[i])
  total[i] = bills[i] + tips[i];
}
console.log('bills: ',bills)
console.log('tips: ',tips)
console.log('tota: ',total)

function calcAverage(arr){
  var sum=0
  for(var i=0;i<arr.length;i++)
  {
    sum+=arr[i]
  }
  return sum/arr.length
}
console.log(`Trung binh mang total: ${calcAverage(total)}`)