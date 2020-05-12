const { prompt } = require('inquirer')


const info = ['name', 'age', 'email', 'username', 'password', 'address', 'phone', 'ssn']

let questions = []
for (let i = 0; i < info.length; i++) {
  questions.push({
    type: 'input',
    name: info[i],
    message: `What is your ${info[i]}?`
  })
}

prompt(questions)
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

// for (let i = 0; i < info.length; i++) {
//   prompt({
//     type: 'input',
//     name: info[i],
//     message: `What is your ${info[i]}?`
//   })
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => console.log(err))
// }

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'name',
//     message: 'What is your name?'
//   },
//   {
//     type: 'input',
//     name: 'age',
//     message: 'How old are you?'
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: 'What is your email?'
//   },
//   {
//     type: 'input',
//     name: 'address',
//     message: 'What is your address?'
//   }
// ])
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))