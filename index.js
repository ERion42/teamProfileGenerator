// Establish necessary variables
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const util = require('util');

const teamArray = [];

const writeFileAsync = util.promisify(fs.writeFile);

// Input Functions

// Create Team Name - Does not work at the moment, will go back later and add in as time permits
// const nameTeam = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'teamName',
//             message: "What is the name of your team?",
//             // This answer is required
//             validate: function(answer) {
//                 if (answer.length < 1) {
//                     return console.log("Please put in a valid response.");
//                 }
//                 return true;
//                 }     
//         }
//     ])
//     .then(addMember());
// }

// Add Manager
const createManager = () => {
    inquirer.prompt([
        // Manager Name
        {
            type: 'input',
            name: 'managerName',
            message: "Manager's Name: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }                    
        },
        // Manager ID
        {
            type: 'input',
            name: 'managerID',
            message: "Manager's ID Number: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }                    
        },
        // Manager Email
        {
            type: 'input',
            name: 'managerEmail',
            message: "Member's Email Address: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }    
        },
        // Manager Office Number
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Manager's Office Number: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }    
        },
    ]).then(answers => {
        console.log("Thank you for entering the manager's data!");
        addMember();
    })
}

// Add another member to the team?
const addMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'memberAdd',
            message: "Add another member?",
            choices: [
                'Engineer', 'Intern', 'Finished Adding Members'
            ],
        }
    ]).then(answers => {
        switch(answers.memberAdd) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                console.log("Thank you for entering your team's data... creating file now.");
                generateHTML();
        }
        })
    }

    
// User inputs member information
const addEngineer = () => {
    return inquirer.prompt([
        // Engineer's Name
        {
            type: 'input',
            name: 'engineerName',
            message: "Engineer's Name: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }                    
        },
        // Engineer's ID
        {
            type: 'input',
            name: 'engineerID',
            message: "Engineer's ID Number: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }                    
        },
        // Engineer Email
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Engineer's Email Address: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }    
        },
        // Engineer GitHub
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "Engineer's GitHub Link: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }    
        },
    ]).then(answers => {
        console.log("Thank you for entering that engineer's data!");
        addMember();
    })
};

const addIntern = () => {
    return inquirer.prompt([
        // Intern's Name
        {
            type: 'input',
            name: 'internName',
            message: "Intern's Name: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }                    
        },
        // Intern's ID
        {
            type: 'input',
            name: 'internID',
            message: "Intern's ID Number: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }                    
        },
        // Intern's Email
        {
            type: 'input',
            name: 'internEmail',
            message: "Intern's Email Address: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }    
        },
        // Intern's school
        {
            type: 'input',
            name: 'internSchool',
            message: "Intern's School: ",
            // This answer is required
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }    
        }
    ]).then(answers => {
        console.log("Thank you for entering that intern's data!");
        addMember();
    })
};

// Write HTML
const generateHTML = (answers) =>
`
<!doctype html>
<html lang="en">
    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>${answers.team}</title>
    </head>
<body>


    <header class="d-flex justify-content-center py-3" style="background-color: red; color: white;">
        <h1>${answers.team}</h1>
    </header>


    <section class="container">
        <section class="row">
            <!-- Manager card -->
            <div class="col-md" style="margin: 5px;">
                <section class="card">
                    <section class="card-header" style="background-color: blue; color: white;">
                        <h1>${answers.name}</h1>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                            </svg>  ${answers.role}</p>
                    </section>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: ${answers.email}</li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </section>
            </div>
            <!-- Engineer card -->
            <div class="col-md" style="margin: 5px;">
                <section class="card">
                    <section class="card-header" style="background-color: blue; color: white;">
                        <h1>${answers.name}</h1>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                            </svg>  ${answers.role}</p>
                    </section>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: ${answers.email}</li>
                        <li class="list-group-item">GitHub: </li>
                    </ul>
                </section>
            </div>
            <!-- Intern card -->
            <div class="col-md" style="margin: 5px;">
                <section class="card">
                    <section class="card-header" style="background-color: blue; color: white;">
                        <h1>${answers.name}</h1>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>  ${answers.role}</p>
                    </section>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: ${answers.email}</li>
                        <li class="list-group-item">School: </li>
                    </ul>
                </section>
            </div>
        </section>
    </section>


</body>
</html>
`


const init = () => {
    // nameTeam();
    createManager();
    // addMember();
    // addIntern();
    // addEngineer();
    // generateHTML()
    //     .then((answers) => writeFileAsync('./dist/index.html', generateHTML(answers)))
    //     .then(() => console.log('Successfully wrote dat file'))
    //     .catch((err) => console.error(err));
};



// const callBack = () => {
//     addMember()
//     .then((answers) => writeFileAsync('./dist/index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote dat file'))
//     .catch((err) => console.error(err));
// };

init();
