# gig-cli

A command line tool for you to quickly create `.gitignore` files

## Features:

- Out of the box, easy to use.
- Ignore templates are provided for multiple language projects, currently supported: `node`、`java`.

## Start:

### Install:

```shell
npm install gig-cli -g
```

### Use:

- Create `.gitignore` for current working path.

```shell
gig
```

![](https://raw.githubusercontent.com/loclink/picgo-images/master/images202302021752715.gif?token=AZN65Z245UHQJ2Z7C25CNJ3D3OEBI)

- View help to learn more

```shell
➜  gig-cli git:(master) gig -h
Usage: gig [options]

  generates an gitignore file based on the template.

Options:
  -v, --version  output the version number
  -h, --help     display help for command
```

## License:

[MIT](https://github.com/loclink/gig-cli/blob/master/license)
