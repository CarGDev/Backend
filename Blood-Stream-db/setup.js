'use strict'

const db = require('./lib/db')
const chalk = require('chalk')
const inquirer = require('inquirer')
const config = require('configuration')

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

  console.log(`${chalk.bgGreen.white('[Connected]:')} Success!`)
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.bgRed.white('[fatal error]:')} ${err.message}`)
  console.error(`${chalk.bgRed.white('[Error]:')} ${err.stack}`)
  process.exit(1)
}

setup()