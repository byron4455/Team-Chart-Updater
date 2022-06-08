const Manager = require("../lib/Manager");

function generateHTML(everyone) {
    console.log(typeof(everyone))
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/dist/style.css">
        <title>Team Chart</title>
    </head>
    <body>
        <header>
            <h1>Team Chart</h1>
        </header>
        <div class="container">
        <div class="engineer">
            <h1>Engineer</h1>
            <p>${everyone.Engineername}</p>
            <p>${everyone.EngineerEmail}</p>
            <p>${everyone.engineerId}</p>
        </div>
        <div class="manager">
            <h1>Manager</h1>
            <p>${everyone.Managername}</p>
            <p>${everyone.managerEmail}</p>
            <p>${everyone.managerId}</p>
            <p>${everyone.managerOffice}</p>
        </div>
        <div class="intern">
            <h1>Intern</h1>
            <p>${everyone.internName}</p>
            <p>${everyone.internId}</p>
            <p>${everyone.internEmail}</p>
            <p>${everyone.internSchool}</p>
        </div>
    </div>
    </body>
    </html>
    `
}
module.exports = generateHTML;