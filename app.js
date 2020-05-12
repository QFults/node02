const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'example',
    message: 'Type anything:'
  }
])
  .then(data => {
    console.log(data.example)
  })
  .catch(err => console.log(err))