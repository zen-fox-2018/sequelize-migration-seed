const fs = require(`fs`)
let file = fs.readFileSync(`contacts.csv`, `utf8`).split(`\n`)
file = file.filter((e) => e != '')
for (let i = 0; i < file.length; i++) {
    file[i] = file[i].split(`,`)
}
let result = []
for (let i = 0; i < file.length; i++) {
    result.push({
        name: file[i][1],
        email: file[i][2],
        phone: file[i][3]
    })
    
}
console.log(result);
