// различные события
const EventEmitter = require('events')

const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log('ON: anything', data)
// })

// // прослушка данного события
// emitter.emit('anything', {
//     a: 1
// })
// emitter.emit('anything', {
//     b: 1
// })

// setTimeout(() => emitter.emit('anything', {
//     c: 3
// }, 1500))

class Dispathcer extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data) // прослушка события
    }
}

const dis = new Dispathcer()

dis.subscribe('aa', data => {
    console.log('ON: aa, data')
})

dis.dispatch('aa', {
    aa: 22
})