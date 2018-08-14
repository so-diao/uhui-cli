
const down = require('download-git-repo')
const rimraf = require('rimraf')
const path = require('path')
const cmd = require('node-cmd')


// https://api.github.com/repos/so-diao/templates/contents


module.exports = ({template, name}) => {
    const folderName = 'templates'
    const sourcePath = (`${folderName}*)(*${template}`).replace('*)(*', '\\')
    const targetPath = name
    const copyCmd = `echo D | xcopy ${sourcePath} ${targetPath} /ey`


    down('so-diao/templates', folderName, {clone: false}, err => {

        if ( err ) {
            console.log(err)
            console.log('下载失败')
            return
        }
        cmd.get(copyCmd, (err2) =>{
            if ( err2 ) {
                console.log(err2)
                console.log('下载失败')
                return
            }

            rimraf('templates', () => {

                console.log('下载成功')
            })

        })
    })
}


