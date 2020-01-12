import program from 'commander';
import { version } from '../package.json';

const run = () => {
  program
    .version(version, '-V, --version', 'output the version number')
    .description('Compares two configuration files and shows a difference.');
  program.parse(process.argv);
};

export default run;
