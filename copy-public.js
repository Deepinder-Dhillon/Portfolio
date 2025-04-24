const fs = require('fs-extra');
const path = require('path');

// Copy all files from public to build/client
fs.copySync('public', 'build/client', {
  overwrite: true,
  errorOnExist: false,
});

console.log('Public files copied to build/client');