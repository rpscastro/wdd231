const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function renderCourses(courses) {
    const html = courses.map((course) => {
        if (course.completed) {
            return `<div class="course-completed">
                        <h2 class="course-title">${course.subject} ${course.number}</h2>
                    </div>`;
        } else {
            return `<div class="course-uncompleted">
                        <h2 class="course-title">${course.subject} ${course.number}</h2>
                    </div>`;
        }
    });
    document.querySelector("#courseList").innerHTML = html.join("");
}

function sumCredits(courses) {
    return courses.reduce((total, course) => {
        return total + course.credits;
    }, 0);
}

let totalCredits = document.querySelector("#credits");

//Displays all the courses stored in the array.
document.querySelector("#all").addEventListener("click", function () {
    renderCourses(courses);
    totalCredits.textContent = `Number of credits: ${sumCredits(courses)}`; 

});

//CSE - Displays all the CSE courses stored in the array
document.querySelector("#cse").addEventListener("click", function () {
    const cseCourses = courses.filter((course) =>
        course.subject == "CSE"
    );
    renderCourses(cseCourses);
    totalCredits.textContent = `Number of credits: ${sumCredits(cseCourses)}`; 
});

//WDD - Displays all the WDD courses stored in the array
document.querySelector("#wdd").addEventListener("click", function () {
    const wddCourses = courses.filter((course) =>
        course.subject == "WDD"
    );
    renderCourses(wddCourses);
    totalCredits.textContent = `Number of credits: ${sumCredits(wddCourses)}`;
});

renderCourses(courses);
totalCredits.textContent = `Number of credits: ${sumCredits(courses)}`;