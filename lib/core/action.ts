import isGit from 'is-git-repository';
import prompts from 'prompts';
import chalk from 'chalk';
import { copyFileSync } from 'fs-extra';
import { resolve } from 'path';
import { fileExists } from '@/utils';

const createGitIgnoreAction = async () => {
  if (!isGit()) {
    const doubtResponse = await prompts({
      name: 'value',
      type: 'toggle',
      message: chalk.yellow('🔔 The current work path does not belong to the Git repository, want to continue?'),
      initial: true,
      active: 'yes',
      inactive: 'no'
    });
    if (!doubtResponse.value) process.exit();
  }

  const selectResponse = await prompts({
    type: 'select',
    name: 'value',
    message: '📃 Please choose to ignore the template:',
    choices: [
      { title: 'node', value: 'node' },
      { title: 'java', value: 'java' }
    ]
  }).then((res) => {
    if (!res.value) {
      console.log(chalk.yellow('Generate operation has been cancelled.'));
      process.exit();
    }
    return res;
  });

  if (fileExists('.gitignore')) {
    await prompts({
      name: 'value',
      type: 'toggle',
      message: 'Current working directory already exists ignore files, want to cover?',
      initial: false,
      active: 'yes',
      inactive: 'no'
    }).then((res) => {
      if (!res.value) {
        console.log(chalk.yellow('Generate operation has been cancelled.'));
        process.exit();
      }
      return res;
    });
    // const writeTypeResponse = await prompts({
    //   name: 'value',
    //   type: 'select',
    //   message: 'Check that the file already exists, select write mode:',
    //   choices: [
    //     { title: 'cover', value: 'cover' },
    //     { title: 'append', value: 'append' }
    //   ]
    // });

    // switch (writeTypeResponse.value) {
    //   case 'cover':
    //     copyFileSync(
    //       resolve(__dirname, `./template/${selectResponse.value}.ignore`),
    //       resolve(process.cwd(), '.gitignore')
    //     );

    //     break;
    //   case 'append':
    //     writeFileSync(
    //       resolve(process.cwd(), '.gitignore'),
    //       readFileSync(resolve(process.cwd(), '.gitignore')).toString() +
    //         readFileSync(resolve(__dirname, `./template/${selectResponse.value}.ignore`)).toString()
    //     );
    //     break;
    // }
  }

  copyFileSync(resolve(__dirname, `./template/${selectResponse.value}.ignore`), resolve(process.cwd(), '.gitignore'));
  console.log(chalk.green('✅ Generate gitignore successfully!!'));
};

export { createGitIgnoreAction };
