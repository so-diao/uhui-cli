const request = require('sync-request')
const url = 'https://api.github.com/repos/so-diao/templates/contents'
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
}



module.exports = () => {

    try {
        const Templates = JSON.parse(request('GET', url, {headers}).getBody('utf8'))

        return Templates.filter(item =>item.type === 'dir')

    } catch (error) {
        
        return false
    }


}