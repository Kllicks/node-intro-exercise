

function hello(whom) {
    console.log(`hello ${whom}.`);
}

// function salutations(whom){
//     console.log(``);
// }

function goodbye(whom) {
    console.log(`goodbye ${whom}.`);
}

// 1. Export the hello function
module.exports = {
    hello,  // equivalent to hello: hello
    goodbye // equivalent to goodbye: goodbye
};