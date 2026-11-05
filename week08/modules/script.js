// courses.js

//object
const aCourse = {
    //attributes
    code: "CSE 131",
    name: "Web Development",

    //array of objects inside a object
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    
    enrollStudent: function(sectionNumber){
        const sectionIndex = this.sections.findIndex((section) => sectionNumber == section.sectionNum);
        if(sectionIndex !== -1) {
            this.sections[sectionIndex].enrolled ++; 
            setSections(this.sections)
        }
        
    }

};




//fuction
function setHeader(course) {
    //querysecltoring 
    const courseCode = document.getElementById("courseCode");
    const courseName = document.getElementById("courseName");
    //assigning a varible
    courseCode.textContent = course.code;
    courseName.textContent = course.name;

}


//Section Header Template addaptive HTML
function sectionTemplate(section){
    return `
        <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
    `

} //function
function setSections(sections) {
    //query selector
    const sectionEl = document.querySelector("#sections");
    //array funciton. special kind of for loop, maps says " do what I say to everything in the array"
    const html = sections.map(sectionTemplate)
    //turns it into a string seperating it by what you place inside the ();
    sectionEl.innerHTML = html.join('');
}

//calling the functions
setHeader(aCourse);
setSections(aCourse.sections);

const button = document.querySelector("#enrollStudent");

button.addEventListener("click" ,function (event) {
    const num = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(num)
    
})