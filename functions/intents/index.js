let intents = {
    welcome: require('./welcome'),
    fallback: require('./fallback')
};

let allIntents = new Map();

// eslint-disable-next-line no-unused-vars
for (let [intentKey, intentValue] of Object.entries(intents)) {
    for (let [key, value] of Object.entries(intentValue)) {
        allIntents.set(key, value);
    }
}

module.exports = allIntents;