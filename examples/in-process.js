var s = require('seneca')()
          .use(require('../'))
var assert = require('assert')

var task = {
  task: 'my task',
  param: 42
}

s.add({
  task: 'my task'
}, function(args, cb) {
  assert.equal(args.param, 42)
  console.log('OK')
  cb()
  s.act({ role: 'queue', cmd: 'stop' })
})

console.log('worked if you see OK')
s.act({ role: 'queue', cmd: 'start' })
s.act({ role: 'queue', cmd: 'enqueue', msg: task })
