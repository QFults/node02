const { writeFile, appendFile } = require('fs')
const { prompt } = require('inquirer')
const { promisify } = require('util')
const axios = require('axios')

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)

const top = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
`

const movie = data => {
  return `
    <div>
    <img src="${data.Poster}" alt="${data.Title}">
    <h1>${data.Title}</h1>
    <p>${data.Plot}</p>
  </div>
  `
}

writeFileSync('movies.html', top)
  .then(() => {
    prompt([
      {
        type: 'input',
        name: 'movie1',
        message: 'What is your #1 favorite movie?'
      },
      {
        type: 'input',
        name: 'movie2',
        message: 'What is your #2 favorite movie?'
      },
      {
        type: 'input',
        name: 'movie3',
        message: 'What is your #3 favorite movie?'
      },
      {
        type: 'input',
        name: 'movie4',
        message: 'What is your #4 favorite movie?'
      },
      {
        type: 'input',
        name: 'movie5',
        message: 'What is your #5 favorite movie?'
      },
    ])
      .then(movies => {
        console.log(movies)
        for (const name in movies) {
          axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movies[name]}`)
          .then(({ data }) => {
            appendFileSync('movies.html', movie(data))
            if (name === 'movie5') {
              appendFileSync('movies.html', `</body></html>`)
            }
            })
        }
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))