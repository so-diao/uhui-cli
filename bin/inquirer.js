const getTemplates = require('./getTemplates.js')
const inquirer = require('inquirer')
const down = require('./download.js')





module.exports = () => {
    const Templates = getTemplates()

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: '项目名称'
        },
        {
            type: 'list',
            name: 'template',
            message: '选择模板',
            choices: Templates.map(item =>item.name)
        }
    ]).then((answers) => {
        down(answers)
    })
}




