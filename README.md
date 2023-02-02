# gig-cli

![](https://img.shields.io/badge/node-%3E%3D14.0.0-green) ![npm](https://img.shields.io/npm/dt/gig-cli) ![npm](https://img.shields.io/npm/v/gig-cli?label=version)

A command line tool for you to quickly create **.gitignore** files.

## ✨ Features:

- Out of the box, easy to use.
- Ignore templates are provided for multiple language projects , currently supported:

  | Template | Finish |
  | -------- | ------ |
  | node     | ✅     |
  | java     | ✅     |
  | python   | 🚧     |
  | go       | 🚧     |
  |  |  |

## 🌈 Start:

### Install:

```shell
npm install gig-cli -g
```

:point_down:

### Usage:

- Create `.gitignore` for current working path:

```shell
gig
```

![](https://raw.githubusercontent.com/mihu915/picgo-images/master/images202302021821942.gif)

- View help to learn more:

```shell
➜  gig-cli git:(master) gig -h
Usage: gig [options]

  generates an gitignore file based on the template.

Options:
  -v, --version  output the version number
  -h, --help     display help for command
```

## 📃 License:

license: [MIT](https://github.com/loclink/gig-cli/blob/master/license)
