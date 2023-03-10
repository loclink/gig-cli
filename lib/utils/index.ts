import chalk from 'chalk';
import fs from 'fs-extra';
import { resolve } from 'path';
import shell from 'shelljs';

const fileExists = (fileName: string) => {
  const isExists = fs.pathExistsSync(resolve(process.cwd(), fileName));
  return isExists;
};

const exitProcess = (state: any) => {
  if (state.aborted) {
    process.nextTick(() => {
      console.log(chalk.yellow('Generate operation has been cancelled.'));
      process.exit(0);
    });
  }
};

const gitExist = () => {
  if (!shell.which('git')) {
    console.log(chalk.red('❌ Not detected the git command, please check whether the installation'));
    process.exit(0);
  }
};

const gitInitialization = () => {
  gitExist();
  return new Promise((resolve, reject) => {
    shell.exec('git init', { silent: true }, (code) => {
      if (code === 0) {
        console.log(chalk.green('✅ Git repository initialization of success'));
        resolve(code);
      } else {
        reject();
      }
    }).stdout;
  });
};

const handleTemplateChoices = () => {
  const templateList = fs.readdirSync(resolve(__dirname, './template'));
  return templateList.map((item) => {
    return { title: item.split('.')[0], value: item };
  });
};

export { fileExists, exitProcess, gitExist, gitInitialization, handleTemplateChoices };
