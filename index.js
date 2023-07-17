// const chalk = require('chalk');
// const text = require('./data');

// // console.log(chalk.blue('Hello NodeJS'));
// console.log(chalk.blue(text));



const http = require('http')
const fs = require('fs')
const path = require('path')

// * Создание веб-сервера
// ====================================================
// req - информация, которую клиент отправляет на сервер
// res - ответ сервера
const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data) // завершение ответа с сервера
    //     })
    // }
    // if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data) // завершение ответа с сервера
    //     })
    // }
    // console.log(req.url) // определяет по какому url приходит запрос

    // оптимиация кода выше
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    // если нет расширения
    if (!ext) {
        filePath += '.html'
    }
    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(3000, () => {
    console.log(`Server has been started on ${PORT}`)
})