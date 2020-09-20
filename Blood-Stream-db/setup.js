'use strict'

const db = require('./index')
const chalk = require('chalk')
const inquirer = require('inquirer')
const config = require('./config')

const prompt = inquirer.createPromptModule()

async function setup (value) {
  let answer = false
  process.argv.forEach((val) => {
    if (val === '--yes' || val === '-y') {
      answer = true
    }
  })

  if (!answer) {
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }
    ])
    if (!answer.setup) {
      return console.log(chalk.green('Nothing happened :)'))
    }
  }
  await db(config(value)).catch(handleFatalError)
  
  console.log(`${chalk.bgGreen.black('[Connected]:')} Success!`)
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.bgRed.black('[fatal error]:')} ${err.message}`)
  console.error(`${chalk.bgRed.black('[Error]:')} ${err.stack}`)
  process.exit(1)
}

setup()
