var spawnSync = require('child_process').spawnSync
var jsonfile = require('jsonfile')
var path = require('path')
var config = require('../config.json')

var _exec = function (command) {
  spawnSync('git', command, {
    stdio: 'inherit'
  })
}

module.exports = function (user, program) {
  var _oArgs = program.rawArgs
  var originArgs = _oArgs.slice(_oArgs.indexOf(user))
  var args = originArgs.slice(1)
  var userEmail = config[user]
  if (user === 'config') {
      // update config.json
      config[args[0]] = args.concat().slice(1).join(' ')
      jsonfile.writeFileSync(path.join(__dirname, '../config.json'), config, {
        spaces: 2
      })
  } else if (user === 'remove') {
    delete config[args[0]]
    jsonfile.writeFileSync(path.join(__dirname, '../config.json'), config, {
      spaces: 2
    })
  } else if (userEmail) {
    // set git repository user config
    _exec([
      'config',
      'user.name',
      user
    ])
    _exec([
      'config',
      'user.email',
      userEmail
    ])
  } else {
      throw new Error('Git user [' + user + '] does not exist')
  }
}
