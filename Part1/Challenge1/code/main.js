var khoiluongMark = parseFloat(prompt('Khoi luong Mark: '))
var chieucaoMark = parseFloat(prompt('Chieu cao Mark: '))
var khoiluongJohn = parseFloat(prompt('Khoi luong John: '))
var chieucaoJohn = parseFloat(prompt('Chieu cao John: '))
var BMI_John = khoiluongJohn / chieucaoJohn**2
var BMI_Mark = khoiluongMark / chieucaoMark**2
var markHigherBMI = true
console.log('BMI_Mark = ' + BMI_Mark)
console.log('BMI_John = ' + BMI_John)
if(BMI_John > BMI_Mark) markHigherBMI = false
console.log(markHigherBMI)