'use strict';

let hours;
let minutes;
let seconds;

hours = prompt('number of hours?');
minutes = Number(hours) * 60;
seconds = Number(hours) * 3600;

alert('at ' + hours + ' hours' + ', there are ' + minutes + ' minutes, or ' + seconds + ' seconds.');