function validerOgKjopBillett(){
    let filmOk=validerFilm($("#film").val())
    let antallOk=validerAntall($("#antall").val())
    let fornavnOk=validerFornavn($("#fornavn").val())
    let etternavnOk=validerEtternavn($("#etternavn").val())
    let tlfOk=validerTlfnr($("#tlfnr").val())
    let epostOk=validerEpost($("#epost").val())
    if(filmOk&&antallOk&&fornavnOk&&etternavnOk&&tlfOk&&epostOk){
        kjopBillett()
    }
}

function kjopBillett() {

    const billett = {
        "film": $("#film").val(),
        "antall": ($("#antall").val()),
        "fornavn": $("#fornavn").val(),
        "etternavn":$("#etternavn").val(),
        "tlfnr": $("#tlfnr").val(),
        "epost": $("#epost").val()
    }
    $.post("/lagre", billett, function () {
        hentAlle();
    });
    $("#film").val("Velg film her")
    $("#antall").val("")
    $("#fornavn").val("")
    $("#etternavn").val("")
    $("#tlfnr").val("")
    $("#epost").val("")
}
function hentAlle() {
    $.get("/hentAlle",function(data){
        formaterData(data)
    });
}
function formaterData(biletter){
    let ut = "<table>"
    for (let i = 0; i < biletter.length; i++) {
        ut += "<tr>"
        ut += "<td>" + biletter[i].film + "</td><td>" + biletter[i].antall + "</td><td>" + biletter[i].fornavn + "</td><td>"+biletter[i].etternavn +"</td><td>"+ biletter[i].tlfnr + "</td><td>" + biletter[i].epost+"</td>"
        ut += "<tr>"
    }
    ut += "</table>"
    $("#Billetter").html(ut)
}

function slettBillett() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}