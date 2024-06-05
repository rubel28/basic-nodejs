const EventEmitter = require('events');

class school extends EventEmitter {
    startSchool() {
        console.log("Starting School");
        // Raise event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period end',
            });
        }, 2000)
    }
}

module.exports = school;