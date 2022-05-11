const jsdoc2md = require('jsdoc-to-markdown');
const Path = require("path");
const FS = require("fs");
let Files = [];

function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (FS.statSync(Absolute).isDirectory()) ThroughDirectory(Absolute);
        else if (Absolute.indexOf('node_modules') === -1 && Absolute.indexOf('package') === -1 && Absolute.indexOf('doc') === -1 && Absolute.indexOf('ecosystem') === -1 && Absolute.indexOf('.ts') !== -1) Files.push(`${process.cwd()}/`+Absolute)
        
    });
    return Files
}

const generateDoc = async () => {
    ThroughDirectory('.');
    console.log(Files[0]);
    const output = jsdoc2md.renderSync({
		files: './**/*.ts',
	});

    
}

generateDoc()