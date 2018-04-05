#!/usr/bin/env node
var fs = require('fs-extra');
var path = require('path');
var rootDir = process.cwd();
var pathFrom = path.join(rootDir, 'node_modules/');
var pathTo = path.join(rootDir, 'www/js/node_modules');

// Modules to copy
var modules = [
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-messages'
];

console.log('------------ Copy Node Modules Into www ------------');

// Copy modules
modules.forEach(function (module) {
    var copyFrom = path.join(pathFrom, module);
    var copyTo = path.join(pathTo, module);

    console.log('Copying ' + copyFrom + ' to ' + copyTo);

    fs.copySync(copyFrom, copyTo);
});
