/* UPDATE FOR EVERY ASSIGNMENT: */

const assignments = ['lab1', 'hw1', 'lab2', 'hw2', 'lab3', 'hw3', 'hw4', 'midterm', 'hw5', 'lab4', 'lab5', 'hw6', 'hw7'];


const template = document.getElementById('assignment-template');

assignments.map((assignment) => {
    let type;

    // Check type of assignment
    type = assignment.includes('lab') ? 'lab' : type;
    type = assignment.includes('hw') ? 'hw' : type;
    type = assignment.includes('midterm') ? 'midterm' : type;
    type = assignment.includes('final') ? 'final' : type;

    const clone = template.content.cloneNode(true);
    const container = clone.querySelector('#assignment-container');
    const title = clone.querySelector('#assignment-title');
    container.href = `${assignment}/index.html`;

    switch (type) {
        case 'lab':
            title.textContent = `Lab ${assignment.slice(3)}`
            document.getElementById('labs').appendChild(clone);
            break;
        case 'hw':
            title.textContent = `Homework ${assignment.slice(2)}`
            document.getElementById('homeworks').appendChild(clone);
            break;
        case 'midterm':
            title.textContent = 'Midterm';
            document.getElementById('projects').appendChild(clone);
            break;
        case 'final':
            title.textContent = 'Final'
            document.getElementById('projects').appendChild(clone);
            break;
    }
});