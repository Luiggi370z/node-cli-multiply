import {
    CreateFile,
    ListTable
} from './base'
import argv from "./config/yargs"
import colors from 'colors'

let command = argv._[0]

switch (command) {
    case 'list':
        console.log('List 😎'.blue)
        ListTable(argv.base, argv.limit).then((result) => {
            console.log(colors.rainbow(result))
        }).catch((err) => {
            console.log(err)
        });
        break

    case 'create':
        console.log('create 💻'.yellow)
        CreateFile(argv.base).then((result) => {
            console.log(`File created: ${result}`.green)
        }).catch((err) => {
            console.log(err)
        })
        break

    default:
        console.log('Command not found'.red)
        break
}