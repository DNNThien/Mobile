var khoiluongMark = parseFloat(prompt('Khoi luong Mark: '))
var chieucaoMark = parseFloat(prompt('Chieu cao Mark: '))
var khoiluongJohn = parseFloat(prompt('Khoi luong John: '))
var chieucaoJohn = parseFloat(prompt('Chieu cao John: '))
var BMI_John = parseFloat((khoiluongJohn / chieucaoJohn**2).toFixed(1))
var BMI_Mark = parseFloat((khoiluongMark / chieucaoMark**2).toFixed(1))
console.log('BMI_Mark = ' + BMI_Mark)
console.log('BMI_John = ' + BMI_John)
if(BMI_Mark > BMI_John)
{
    console.log('Mark\'s BMI is higher than John\'s!')
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})!`)
}
else
{
    console.log('John\'s BMI is higher than Mark\'s!')
    console.log(`John's BMI (${BMI_John}) is higher than Mark's (${BMI_Mark})!`)
}
