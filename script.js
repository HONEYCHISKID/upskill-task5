let internName = "Isife Chisom";
let taskOne = 10;
var taskTwo = 8;
let taskThree = 6;
const totalScore = taskOne + taskTwo + taskThree;
const averageScore = totalScore / 3;
console.log(totalScore);
console.log(averageScore);

let grade;
function grades() {
    if (averageScore >= 9){
    grade = 'A';
    } else if (averageScore >= 8){
    grade = 'B';
    } else if (averageScore >= 7){
    grade = 'C';
    } else if (averageScore >= 6){
    grade = 'D';
    } else if (averageScore < 6){
    grade = 'E';
    }
    

    switch (grade) {
        case 'A':
            feedback = "Excellent performance.";
            break;
        case 'B':
            feedback = "Great job! Keep aiming high.";
            break;
        case 'C':
            feedback = "Good effort. Try to improve.";
            break;
        case 'D':
            feedback = "You're close. Keep working at it.";
            break;
        case 'E':
            feedback = "Don't give up. You can do better next time.";
            break;
         default:
            feedback = "Invalid grade."
            break;
        
    }

    message = `<strong>${internName}</strong><br>
    Task One result<strong>: ${taskOne}</strong>,<br>
    Task Two result<strong>: ${taskTwo}</strong>,<br>
    Task Three result<strong>: ${taskThree}</strong>,<br><br>
    Total score<strong>: ${totalScore}.</strong><br>
    Average score<strong>: ${averageScore.toFixed(2)}.</strong><br><br>`

    message2 = `<strong>${internName},</strong> your final grade is<strong>: ${grade}.`

    document.getElementsByTagName("p")[2].innerHTML = message;

    document.getElementsByTagName('p')[3].innerHTML = message2;

    document.getElementsByTagName("h2")[0].innerHTML = feedback;

    
}
grades();


//let grade = ('A', 'B', 'C', 'D', 'E')
