let firstname = "Magnus";
let lastname = "Okoro";
console.log("Student Name: " + firstname + " " + lastname);

let mathematics;
let score1 = 67;
console.log("mathematics: " + score1);

let english;
let score2 = 56;
console.log("English: " + score2);

let biology;
let score3 = 81;
console.log("Biology: " + score3);

let totalScore = score1 + score2 + score3;
console.log("Total Score: " + totalScore);

let remark;
if (totalScore >= 70) {
    remark = "Excellent";
} 
else if (totalScore >= 50 && totalScore <= 69) {
    remark = "Good";
}
else if (totalScore >= 35 && totalScore <= 49) {
    remark = "You can do better";
}
else if (totalScore <=35) {
    remark = "Fail";
}
console.log("Remark: " + remark);
