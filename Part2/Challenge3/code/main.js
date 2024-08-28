function person(fullname, mass, height){
  this.fullName = fullname
  this.mass = mass
  this.height = height

  this.calcBMI = function(){
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

var mark = new person('Mark Miller', 78, 1.69)
var john = new person('John Smith', 92, 1.95)

mark.calcBMI()
john.calcBMI()

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
  console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}