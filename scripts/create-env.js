const fs = require('fs');

fs.writeFileSync('./env', 'API=${process.emv.API}\n')