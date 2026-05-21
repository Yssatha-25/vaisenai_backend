const express = require ('express')
const app = express ()

app.listen(3000, () => {
    console.log("Servidor rodando...")
})

let eventos = []

// Criação de eventos - POST
app.post("/eventos", (req, res) => {
    const novoEvento = {
        id_evento: eventos.length + 1,
        nome_evento: req.body.nome_evento,
        categioria_evento: req.body.categoria_evento,
        fotoDemonstrativa_evento: req.body.fotoDemonstrativa_evento,
        objetivo_evento: req.body.objetivo_evento,
        planejamento_evento: req.body.planejamento_evento,
        produtor_evento: req.body.produtor_evento,
        patrocinadores_evento: req.body.patrocinadores_evento,
        numeroMaximoParticipantes_evento: req.body.numeroMaximoParticipantes_evento,
        idadeMinimaParticipantes_evento: req.body.idadeMinimaParticipantes_evento,
        idadeMaximaParticipantes_evento: req.body.idadeMaximaParticipantes_evento,
        local_evento: req.body.local_evento,
        datas_evento: req.body.data_evento,
        horarios_evento: req.body.horarios_evento,
        ingressos_evento: req.body.ingressos_evento,
        vagasDisponiveis_evento: req.body.vagasDisponiveis_evento,
        visualizacao_evento: req.body.visualizacao_evento,
    }
})