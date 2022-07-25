fetchData = function () {
    let teamName = $("#team-name").val()
    $.get(`/teams/${teamName}`, function (response) {
        render(response)
    })
}

render = function (player) {
    const source = $("#team-template").html()
    const template = Handlebars.compile(source)
    let someHTML = template({ player })
    $(".team-container").append(someHTML)
}

