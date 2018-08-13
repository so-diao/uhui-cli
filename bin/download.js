
const down = require('download-git-repo')
const rimraf = require('rimraf')
const path = require('path')
// const cmd = require('node-cmd')
var cmd = require('child_process').exec


// https://api.github.com/repos/so-diao/templates/contents


module.exports = ({template, name}) => {
    const folderName = 'templates'
    const sourcePath = path.join(__dirname, `../${folderName}/${template}`)
    const targetPath = path.join(__dirname, `../${name}`)
    const copyCmd = `echo D | xcopy ${sourcePath} ${targetPath} /ey`

    down('so-diao/templates', folderName, {clone: false}, err => {

        if ( err ) {
            console.log('下载失败')
            return
        }

        
        cmd(copyCmd, (err) =>{
            
            if ( err ) {

                console.log('下载失败')
                return
            }

            rimraf('templates', () => {

                console.log('下载成功')
            })

        })
        


        
        // rimraf(`./${name}/`)
    })
}


