const { Suggestion, Card, Text, Image } = require('dialogflow-fulfillment-helper');

function setSuggestion(agent, title, suggestions) {
    const platform = agent.source;

    if (platform != null) {
        const currentSuggestions = new Suggestion({
            title: title,
            reply: suggestions[0],
            platform: platform
        });

        for (let index = 1; index < suggestions.length; index++) {
            currentSuggestions.addReply_(suggestions[index]);
        }

        agent.add(currentSuggestions);
    }
}

function setCard(agent, title, text, buttonText, buttonURL) {
    const platform = agent.source;

    if (platform != null) {
        const anotherCard = new Card({
            title: title,
            text: text,
            buttonText: buttonText,
            buttonUrl: buttonURL,
            platform: platform
        });

        agent.add(anotherCard);
    }
}

function setResponse(agent, responses) {
    const platform = agent.source;

    responses.map((response) => {
        if (platform === 'ACTIONS_ON_GOOGLE') {
            const ssmlText = new Text(response.text);
            ssmlText.setSsml(response.ssml);
            agent.add(ssmlText);
        } else {
            agent.add(response.text);
        }
    })
}

function setImage(agent, imageUrl) {
    const platform = agent.source;

    if (platform != null) {
        const anotherImage = new Image(imageUrl);
        agent.add(anotherImage);
    }
}

function findArray(response, title) {
    return response.find(element => element[`${title}`])[`${title}`];
}

module.exports = { setSuggestion, setCard, setResponse, setImage, findArray };