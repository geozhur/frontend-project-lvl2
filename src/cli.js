import program from 'commander';
import { version } from '../package.json';

const run = () => {
  program
    .version(version, '-V, --version', 'output the version number')
    .option('-f, --format [type]', 'Output format')
    .arguments('<firstConfig> <secondConfig>')
    .description('Compares two configuration files and shows a difference.')
    .parse(process.argv);
};

export default run;
