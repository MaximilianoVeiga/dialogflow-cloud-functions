let intents = {
    welcome: require('./welcome'),
    fallback: require('./fallback')
};

let allIntents = new Map();

for (let [, intentValue] of Object.entries(intents)) {
    for (let [key, value] of Object.entries(intentValue)) {
        allIntents.set(key, value);
    }
}

module.exports = allIntents;