let filmEl=document.querySelector("#film")
let antallEl=document.querySelector("#antall")
let fornavnEl=document.querySelector("#fornavn")
let etternavnEl=document.querySelector("#etternavn")
let tlfEl=document.querySelector("#tlfnr")
let epostEl=document.querySelector("#epost")
let kjopEl=document.querySelector("#kjop")
let slettEl=document.querySelector("#slett")
let bilettarray=[]


function kjopBillett() {
    if (filmEl.value === "Velg film her" || antallEl.value === "" ||parseInt(antallEl.value)<0 || fornavnEl.value === "" || etternavnEl.value === "" || sjekkEmail(epostEl.value)===false||tlfEl.value===""||tlfEl.value.length!==8||isNaN(tlfEl.value)===true){
        alert("Noen av feltene har ikke gyldig informasjon, prøv igjen")
        filmEl.value=""
        antallEl.value=""
        fornavnEl.value=""
        etternavnEl.value=""
        tlfEl.value=""
        epostEl.value=""
        return;
    }
    let obj={"film":filmEl.value,"antallBillett":antallEl.value,"navn":fornavnEl.value+etternavnEl.value,"tlfnr":tlfEl.value,"epost":epostEl.value}
    bilettarray.push(obj)
    filmEl.value="Velg film her"
    antallEl.value=""
    fornavnEl.value=""
    etternavnEl.value=""
    tlfEl.value=""
    epostEl.value=""

    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall Billetter</th><th>Navn</th><th>Tlfnr</th><th>Epost</th>" +"</tr>"
    for (let i = 0; i < bilettarray.length; i++) {
        ut += "<tr>"
        ut += "<td>" + bilettarray[i].film + "</td><td>" + bilettarray[i].antallBillett + "</td><td>" + bilettarray[i].navn + "</td><td>" + bilettarray[i].tlfnr + "</td><td>" + bilettarray[i].epost+"</td>"
        ut += "<tr>"
    }
    ut += "</table>"
    document.getElementById("Billetter").innerHTML=ut
}

function slettBillett() {
    bilettarray=[]
    document.getElementById("Billetter").innerHTML="";
}
function sjekkEmail(email){
        return email.includes("@") && email.includes(".");
}
kjopEl.addEventListener("click",kjopBillett)
slettEl.addEventListener("click",slettBillett)


