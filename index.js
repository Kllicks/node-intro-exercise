// 2. Import the hello function
// const hello = require(`./greetings`);
const {hello, goodbye} = require(`./greetings`);

// hello.hello(`me`);
// hello.goodbye(`other me`);
hello(`me`);
goodbye(`other me`);