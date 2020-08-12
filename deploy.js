const path = require('path')
const fs = require('fs')
const { exec } = require('child_process');

const dirCss = path.join(__dirname, 'build/static/css')
const dirJs = path.join(__dirname, 'build/static/js')
const build = path.join(__dirname, 'build/')


fs.readdir(dirCss, function (err, files) {
    //handling error
    if (err) {
        return console.log(`Unable to scan css directory: ${err}`)
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file.match(/^main.(.*).chunk.css$/)) {
            console.log(`aws s3 cp ${dirCss}/${file} s3://streamsnipers/static/static/css/ --acl public-read`)
            exec(`aws s3 cp ${dirCss}/${file} s3://streamsnipers/static/static/css/ --acl public-read`)
        }
    })

})

fs.readdir(dirJs, function (err, files) {
    //handling error
    if (err) {
        return console.log(`Unable to scan js directory: ${err}`)
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if (file.match(/^(.*).chunk.js$/)) {
            console.log(`aws s3 cp ${dirJs}/${file} s3://streamsnipers/static/static/js/ --acl public-read`)
            exec(`aws s3 cp ${dirJs}/${file} s3://streamsnipers/static/static/js/ --acl public-read`)

        }
    })
})
function callback(err) {
    if (err) throw err;
    console.log(`${build}index.html was copied to ${path.join(__dirname, `../streamsnipers-web/common_site/templates/index.html`)}`);
}


fs.copyFile(`${build}index.html`, path.join(__dirname, `../streamsnipers-web/common_site/templates/index.html`), callback)