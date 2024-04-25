function validerFilm(film){
    if(film === "Velg film her"){
        $("#feilFilm").html("Du har ikke valgt en film")
        return false;
    }
    else{
        $("#feilFilm").html("")
        return true;
    }
}

function validerAntall(antall){
    if(antall<1||antall===""||isNaN(antall)===true){
        $("#feilAntall").html("Du må kjøpe minst 1 billett");
        return false;
    }
    else{
        $("#feilAntall").html("")
        return true
    }
}

function validerFornavn(fornavn){
    const regexp=/^[a-zA-ZæøåÆØÅ. \-]{1,}$/
    const ok=regexp.test(fornavn)
    if(!ok){
        $("#feilFornavn").html("Navnet kan ikke være tomt eller inneholde tall");
        return false;
    }
    else{
        $("#feilFornavn").html("")
        return true
    }
}

function validerEtternavn(etternavn){
    const regexp=/^[a-zA-ZæøåÆØÅ. \-]{1,}$/
    const ok=regexp.test(etternavn)
    if(!ok){
        $("#feilEtternavn").html("Navnet kan ikke være tomt eller inneholde tall");
        return false;
    }
    else{
        $("#feilEtternavn").html("")
        return true
    }
}
function validerTlfnr(tlfnr){
    const regexp=/^[0-9]{8}$/
    const ok=regexp.test(tlfnr)
    if(!ok){
        $("#feilTlf").html("Det er ikke et gyldig telefonnummer");
        return false;
    }
    else{
        $("#feilTlf").html("")
        return true
    }


}
function validerEpost(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok= regex.test(email);
    if(!ok){
        $("#feilEpost").html("Det er ikke en gyldig epost")
        return false
    }
    else{
        $("#feilEpost").html("")
        return true
    }
}