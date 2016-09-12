# git-usr

You can easily set git repository user config(user.name and user.email)

## Install

```shell
npm i -g git-usr
```

## Usage

```shell
gusr [command]
```

Commands:

```shell
config <user.name> <user.email>    add or update (<user.name>=<user.email>) config
example                            user@example.com
help [cmd]                         display help for [cmd]
```

The `command` is one of the `<user.name>` you added by `config` command.

Exec `gusr example` and your git repository `[user]` config will be:

```
[user]
        name = example
        email = user@example.com
```

## About add or update config

Just:

```shell
gusr config userName user@email.com
```

Then

```shell
gusr userName
```
