const path = require ('path')

console.log('Directory separator:', path.sep);

const filePath = path.join('C:', 'Users', 'Elena', 'Desktop', 'node-express-course', '01-node-tutorial', 'answers', '09-path-module.js');
console.log('File directory:', filePath)

const absolutePath = path.resolve(__dirname, '09-path-module.js');
console.log('Absolute path:', absolutePath);