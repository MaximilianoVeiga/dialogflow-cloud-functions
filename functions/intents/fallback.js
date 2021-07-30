const { setResponse, findArray } = require("../utils");
const fallbackResponses = require("../responses/fallback");

let fallbackIntents = {
  fallbackIntent: (agent) => {
    setResponse(agent, findArray(fallbackResponses, "fallbackIntent"));
  },
};

module.exports = fallbackIntents;
