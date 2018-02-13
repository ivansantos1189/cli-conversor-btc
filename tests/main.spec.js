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

    it('should return the description when conversor-btc --help', (done) => {
        exec(`node ${conversorBtc} --help`, (err, stdout, stderr) => {
            if (err) throw err;
            expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.true;
            done();
        });
    });

    it('should return the currency option when btc-converter --help', (done) => {
        exec(`${btcConverter} --help`, (err, stdout, stderr) => {
            if (err) throw err;
            expect(stdout.includes('--currency')).to.be.true;
            done();
        });
    });

    it('should return the amount option when btc-converter --help', (done) => {
        exec(`${btcConverter} --help`, (err, stdout, stderr) => {
            if (err) throw err;
            expect(stdout.includes('--amount')).to.be.true;
            done();
        });
    });
});

