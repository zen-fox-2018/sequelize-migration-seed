const fs = require('fs')

fs.readFile( './addresses.csv', 'utf8', (err, data) => {
  if (!err) {
    let output = []
    data.split('\n').map( a => a.split(',')).forEach( b => {
      if (b[0] !== ''){
        output.push({
          name : b[1],
          email : b[2],
          phone : b[3]
        })
      }
    })        
    console.log(output)
  }
})