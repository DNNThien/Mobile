var dolphins = []
var koalars = []
var averageDolphins = 0
var averageKoalars = 0
alert("Nhap diem doi Dolphins")
for(var i=0;i<3;i++)
{
    dolphins.push(parseInt(prompt(`Nhap diem ${i+1}`)))
    averageDolphins += dolphins[i]
}
averageDolphins/=3
alert("Nhap diem doi Koalars")
for(var i=0;i<3;i++)
{
    koalars.push(parseInt(prompt(`Nhap diem ${i+1}`)))
    averageKoalars+=koalars[i]
}
averageKoalars/=3

console.log(`Diem trung binh doi Dolphins: ${parseFloat(averageDolphins.toFixed(2))}`)
console.log(`Diem trung binh doi Koalars: ${parseFloat(averageKoalars.toFixed(2))}`)

if(averageDolphins < 100 && averageKoalars < 100)
{
    console.log("Không có ai thắng")
}
else if(averageDolphins >= 100 || averageKoalars >= 100)
{
    if(averageDolphins < 100)
        console.log('Đội Koalars thắng')
    else if(averageKoalars < 100)
        console.log('Đội Dolpins thắng')
    else if(averageDolphins > averageKoalars)
        console.log('Đội Dolphins thắng')
    else if(averageDolphins == averageKoalars)
        console.log('Hòa')
    else console.log('Đội Koalars thắng')
}