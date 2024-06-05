const School = require('./school.js');

const school = new School();

// register event listener for bellRing
school.on('bellRing', ({period, text}) => {
    console.log(`We need to run because of ${period} is ${text}`);
})

school.startSchool();





