const path = require('path');
const fs = require('fs');

const [ , , file] = process.argv;

const filePath = path.resolve(__dirname, file);

if (fs.existsSync(filePath)) {
    const contents  = fs.readFileSync(filePath, { encoding: 'utf8' }).split('\n');
    let newContents = [];

    contents.map((line) => {
        if (line.includes('# `')) {
            return newContents.push(line.replace(/`/g, ''));
        };
        return newContents.push(line);
    });

    fs.writeFileSync(filePath ,newContents.join('\n'), { encoding: 'utf8' });
} else {
    throw new Error('File does not exist: ' + filePath);
}
