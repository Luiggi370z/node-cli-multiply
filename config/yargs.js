import yargs from 'yargs'

const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l'
    }
}

const argv = yargs
    .command('list', 'Print in console the table', options)
    .command('create', 'Create a text file with the calculations.', options)
    .help()
    .argv

export default argv