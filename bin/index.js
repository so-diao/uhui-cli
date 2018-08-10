#!/usr/bin/env node


const program = require('commander')
// const down = require('download-git-repo')
const inquirer = require('inquirer')
const request = require('request-promise')



program
        .version( require('../package').version, '-v, --version' )
        .usage('<command> [options]')
        .on('--help', printHelp)
        .on('--h', printHelp)
        .parse(process.argv)




const args = program.args
let subcmd = args[0]
const TempName = args[1]
const ProjectName = args[2]
const slug = {
    'i': 'install'
}

if( slug[subcmd] ) {
    subcmd = slug[subcmd]
}


if ( !TempName ) {
    getlist()
}


async function getlist() {
    const data = await request('https://api.github.com/repos/so-diao/templates/contents')
    console.log(data)
    return data
}

// inquirer.prompt([ {
//   type: 'confirm', 
//   name: 'test', 
//   message: 'Are you handsome?', 
//   default: true 
// },
// {
//     type: 'confirm', 
//   name: '222', 
//   message: 'Are you handsome?', 
//   default: true 
// }]).then((answers) => { 
//     console.log(answers)
// })














function printHelp() {
    console.log()
    console.log('  所有命令')
    console.log()
    console.log('    install        <模板名称>')
    console.log('                   php | spa')
    console.log()
}