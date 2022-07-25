const express = require('express')
const app = express()
const path = require('path')
const axios = require("axios")
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
}
const data = {
    teams: {}
}
app.get('/teams/:NameOfteam', (request, response) => {
    let teamID = request.params.NameOfteam
    let id = teamToIDs[teamID]
    let cuurentTeam = data.teams.filter((e) => e.teamId === id)

    response.send(cuurentTeam)
})

axios.get('http://data.nba.net/10s/prod/v1/2022/players.json').then((response) => {
    data.teams = response.data.league.standard
})

app.listen(port, function () { })
