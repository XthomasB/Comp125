// selft executuing anonymous function 
// IIFE immediately invoked function expression
var count_x = 1,
    max_x = 5;  // Change this for number of on-off flashes

var flash_color_notify = setInterval(function () {
    /* Change the color depending if it's even(= gray) or odd(=red) */
    if (count_x % 2 === 0) {    // even
        $('#element').css('color', 'gray');
    } else {                    // odd
        $('#element').css('color', 'red');
    }

    /* Clear the interval when completed blinking */
    if (count_x === max_x * 2) {
        clearInterval(flash_color_notify);
    } else { count_x += 1; }
}, 500);

var apple = (function () {
    
console.log("app started...");

var number = 0
number = Math.floor((Math.random()* 10)+1); 
console.log(number)
})();