#!/usr/bin/env node
import { program } from 'commander';
import { __COMMAND_NAME__, __VERSION__ } from './config';
import { createGitIgnoreAction } from './core/action';

program
  .name(__COMMAND_NAME__)
  .version(__VERSION__, '-v, --version')
  .showHelpAfterError()
  .description('  generates an gitignore file based on the template.')
  .action(createGitIgnoreAction)
  .parse(process.argv);
