#!/usr/bin/env node


const program = require('commander')
const down = require('download-git-repo')



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



switch(subcmd) {
    case 'install':
        download_temp(ProjectName)
        break
}


function download_temp(ProjectName) {
    console.error('下载中...')
    return new Promise((resolve, reject) => {
        down('so-diao/templates', ProjectName, { clone: false}, (err) => {

            if ( err ) {
                console.error(err)
                console.error('下载失败')
                reject(err)
                return
            }
            resolve()
        })
    })
    
}













function printHelp() {
    console.log()
    console.log('  所有命令')
    console.log()
    console.log('    install        <模板名称>')
    console.log('                   php | spa')
    console.log()
}