let welcomeResponses = [
    {
        'saudacaoIntent': [
            {
                "text": `Olá! Sou o BOT da Horizon e estou aqui para tirar.`,
                "ssml": `<speak><s>Olá! Sou o BOT da Horizon e estou aqui para tirar.</s></speak>`
            }
        ],
    },
    {
        'aboutIntent': [
            {
                "text": `Eu sou um BOT desenvolvido pela Horizon! Tente me dizer imagens.`,
                "ssml": `<speak><s>Eu sou um BOT desenvolvido pela Horizon! Tente me dizer imagens.</s></speak>`
            }
        ]
    },
    {
        'imageIntent': [
            {
                "text": `Esta é uma imagem da Horizon.`,
                "ssml": `<speak><s>Esta é uma imagem da Horizon.</s></speak>`
            }
        ]
    },
    {
        'encerramentoIntent': [
            {
                "text": `Obrigado por interagir comigo. Até mais!`,
                "ssml": `<speak><s>Obrigado por interagir comigo. Até mais!</s></speak>`
            }
        ]
    }
];

module.exports = welcomeResponses;