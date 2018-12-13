const fs = require('fs')

class Setup {
    static readFile(pathFile) {
        return new Promise((resolve,reject)=> {
            fs.readFile(pathFile, 'utf8', (err,data)=> {
                if(err) reject(err)
                else resolve(data)
            })
        })
    }
   
    static getData(pathFile) {
        return new Promise((resolve, reject)=> {
            Setup.readFile(pathFile)
            .then(dataFile=> {
                let dataFileSplit = dataFile.split('\n')
                let result= []
                for(let i = 0 ;i < dataFileSplit.length; i++) {
              
                    result.push(dataFileSplit[i].split(','))
                }
                resolve(result)
            })
            .catch(err=> {
                reject(err)
            })
        })
    }
}


module.exports = Setup