

function hello(whom) {
    console.log(`hello ${whom}.`);
}

function salutations(whom){
    return `I am an alien, ${whom}`;
}

function goodbye(whom) {
    console.log(`goodbye ${whom}.`);
}

// 1. Export the hello function
module.exports = {
    // hello,  // equivalent to hello: hello
    hello: salutations,
    goodbye // equivalent to goodbye: goodbye
};