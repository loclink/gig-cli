import { pathExistsSync } from 'fs-extra';
import { resolve } from 'path';

const fileExists = (fileName: string) => {
  const isExists = pathExistsSync(resolve(process.cwd(), fileName));
  return isExists;
};

export { fileExists };
