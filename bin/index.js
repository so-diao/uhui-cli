#!/usr/bin/env node


const program = require('commander')
const inquirer = require('./inquirer.js')



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
    inquirer()
}











function printHelp() {
    console.log()
    console.log('  所有命令')
    console.log()
    console.log('    install        <模板名称>')
    console.log('                   php | spa')
    console.log()
}