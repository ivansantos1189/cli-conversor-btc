const program = require('commander');
const pkg = require('../package.json');
const converteBTC = require('./ConverteBTC');

program
  .version(pkg.version)
  .description('Convert Bitcoint to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <amount>', 'Value in Bitcoin to convert. (Default: 1)')
  .parse(process.argv)

console.log(converteBTC(program.currency, program.amount));