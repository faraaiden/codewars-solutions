/*
Write function bmi that calculates body mass index (bmi = weight / height pangkat 2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

const bmi = (weight, height) => {
  const bmiVal = weight / height ** 2;

  if (bmiVal <= 18.5) return 'Underweight';
  if (bmiVal <= 25.0) return 'Normal';
  if (bmiVal <= 30.0) return 'Overweight';
  return 'Obese';
};

bmi(40, 161);