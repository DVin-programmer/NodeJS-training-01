const {
    error
} = require('console');
const fs = require('fs') //file system - позволяет работать с различными файлами
const path = require('path')

// ========================================================
// * в коде ниже нельзя создать еще одну папку
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Папка создана!')

// }) //(путь_до_новой_папки, callback)

// ======================================================
// * создание нового файла
const filePath = path.join(__dirname, 'test', 'text.txt')

fs.writeFile(filePath, 'Hello nodeJS', (err) => {
    if (err) {
        throw err
    }
    console.log('Файл создан!')
})

fs.appendFile(filePath, '\nHello again!!', (err) => {
    if (err) {
        throw err
    }
    console.log('Файл создан!')
})

// ======================================================
// * чтение файлов
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    // const data = Buffer.from(content)
    // console.log('Content: ', data, toString())

    console.log(content)
})