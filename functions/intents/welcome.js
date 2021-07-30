const { setSuggestion, setResponse, setCard, setImage, findArray } = require("../utils");
const welcomeResponses = require("../responses/welcome");

let welcomeIntents = {
  saudacaoIntent: (agent) => {
    setResponse(agent, findArray(welcomeResponses, "saudacaoIntent"));

    setSuggestion(agent, "Como posso te ajudar?", ["Imagens", "Sobre"]);
  },
  aboutIntent: (agent) => {
    setResponse(agent, findArray(welcomeResponses, "aboutIntent"));

    setCard(agent, "Horizon", "Assista o vídeo sobre a Horizon", "Abrir Youtube", "https://www.youtube.com/watch?v=LXb3EKWsInQ");
  },
  imageIntent: (agent) => {
    setResponse(agent, findArray(welcomeResponses, "imageIntent"));

    setImage(agent, "https://www.thehorizon.dev/images/logo.png");
  },
  encerramentoIntent: (agent) => {
    setResponse(agent, findArray(welcomeResponses, "encerramentoIntent"));
  },
};

module.exports = welcomeIntents;
