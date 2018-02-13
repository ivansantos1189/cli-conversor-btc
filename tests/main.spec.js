const expect = require('chai').expect;
const exec = require('child_process').exec;
const conversorBtc = './src/main.js';
const pkg = require('../package.json');


describe('Main CLI', () => {
    it('should return version of conversor-btc', (done) => {
        exec(`node ${conversorBtc} --version`, (err, stdout, stderr) => {
            if (err) throw err;
            expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
            done();
        });
    });
});
