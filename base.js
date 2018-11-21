import fs from 'fs'

export const ListTable = (base, limit = 10) => {
    return new Promise((res, rej) => {

        if (!Number(base)) rej('Not a number!')

        let table = () => Array
            .from(Array(limit).keys())
            .map(k => `${base} * ${k + 1} = ${++k * base}`)
            .join('\n')

        res(table())
    })
}

export const CreateFile = (base, limit = 10) => {
    return new Promise((res, rej) => {

        if (!Number(base)) rej('Not a number!')

        let table = (_base) => Array
            .from(Array(limit).keys())
            .map(k => `${_base} * ${k + 1} = ${++k * _base}`)
            .join('\n')

        const fileName = `./files/table-${base}.txt`

        fs.writeFile(fileName, table(base), err => {
            if (err)
                rej(err)
            else
                res(fileName)
        })
    })
}