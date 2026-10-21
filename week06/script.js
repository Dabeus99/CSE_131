//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

const grades = ["A", "B", "C", "D", "F"];

function convertToPoints(grade) {
    const cleanGrade = grade.toUpperCase();
  switch (cleanGrade) {
    case "A":
      return 4;
    case "B":
      return 3;
    case "C":
      return 2;
    case "D":
      return 1;
    case "F":
      return 0;
    default:
      return null;
  }
}

const gpaPoints = grades.map(convertToPoints);
console.log(gpaPoints);

const fruit = ["apple", "banana", "cherry", "date"];
const testLength = (item) => {
    if(item.length < 6){
        return true;
    } 
    else {
        return false;
    }


}

const shortFruit = fruit.filter(testLength);
console.log(shortFruit);

const students = [
{ first: "Aron", last: "Andrus", grade: "A"},
{first: "Many", last: "Masa", grade: "B"},
{first: "Tamanda", last: "Tanda", grade: "C"}
];

student.forEach((student) => {
  console.log(`${student.first} ${student.last}: ${student.grade}`);
});

console.log("Index of C:", grades.indexOf("C"));

const totalPoints = gpaPoints.reduce((total, points)=> total + points, 0);
console.log("Total grade points:", totalPoints);