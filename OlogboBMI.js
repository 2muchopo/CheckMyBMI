var button = document.getElementById('button')

button.addEventListener('click', function (e) {
    console.log('cool')
    e.preventDefault();

    var name = document.getElementById('name').value;

    var weight = document.getElementById('weight').value;

    var height = document.getElementById('height').value

    var answer = document.getElementById('answer')

    var bmi = (weight / (height * height)).toFixed(2)

    let comment;
    switch (true) {
        case (bmi < 18.5):
            comment = 'You are underweight and may need to build some muscles and eat more food.';
            console.log('small')
          break;
        case (18.5 < bmi < 25):
           comment = 'Very good, you are fit, you may just need to maintain your routine exercises and diet. Bravo!!!';
        break;
        case (25 < bmi < 29.9) :
          comment =  'Your bmi says you are overweight, you may need to take more intense gym routines, check your diet or better still, consult your doctor for better medical advice'
           ;
          break;
        case (bmi > 29.9) :
         comment = 'Your bmi says you are Obese, you may need to take more intense gym routines, check your diet or better still, consult your doctor for better medical advice';
          break;
          default:
            comment ='No value'

              
        
     }
     answer.innerHTML = name + ', your bmi is' + ' ' + bmi + '.' + '<br>' + comment
     
})
//answer.innerText = `${name}, your BMI is ${bmi} ${comment} `
