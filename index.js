// Establish necessary variables
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const writeFileAsync = util.promisify(fs.writeFile);

// Input Function

    // User inputs member information
    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'team',
                message: "Team Name: ",
                // This answer is required
                validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Please put in a valid response.");
                }
                return true;
                }        
            },
            {
                type: 'input',
                name: 'name',
                message: "Member's Name: ",
                // This answer is required
                validate: function(answer) {
                    if (answer.length < 1) {
                        return console.log("Please put in a valid response.");
                    }
                    return true;
                    }                    
            },
            {
                type: 'list',
                name: 'role',
                message: "Member's Role: ",
                choices: [
                    "Manager", "Engineer", "Intern",
                ]
            },
            {
                type: 'input',
                name: 'id',
                message: "Member's ID Number: ",
                // This answer is required
                validate: function(answer) {
                    if (answer.length < 1) {
                        return console.log("Please put in a valid response.");
                    }
                    return true;
                    }                    
            },

            {
                type: 'input',
                name: 'email',
                message: "Member's Email Address: ",
                // This answer is required
                validate: function(answer) {
                    if (answer.length < 1) {
                        return console.log("Please put in a valid response.");
                    }
                    return true;
                    }    
            },

        ])
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
        promptUser()
        .then((answers) => writeFileAsync('./dist/index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote dat file'))
        .catch((err) => console.error(err));
    };

    init();