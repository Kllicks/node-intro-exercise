// 2. Import the hello function
// const hello = require(`./greetings`);
const {hello, goodbye} = require(`./greetings`);

const cowsay = require(`cowsay`);

// hello.hello(`me`);
// hello.goodbye(`other me`);
hello(`me`);
goodbye(`other me`);

let saying = cowsay.say({
    // text : "I'm a coooooow",
    text: hello(`me`),
	e : "oO",
	T : "U "
})

console.log(saying);