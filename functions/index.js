'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment-helper');

const intents = require('./intents/index');

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });

    agent.handleRequest(intents);
});
