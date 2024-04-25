package oslomet.oblig3_data1700;

public class Kinobillett {
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private String tlfnr;
    private String epost;

    public Kinobillett(String film,int antall,String fornavn,String etternavn,String tlfnr, String epost){
        this.film=film;
        this.antall=antall;
        this.fornavn=fornavn;
        this.etternavn=etternavn;
        this.tlfnr=tlfnr;
        this.epost=epost;
    }
    public Kinobillett(){

    }

    public String getFilm() {
        return film;
    }

    public int getAntall() {
        return antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public String getTlfnr() {
        return tlfnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public void setTlfnr(String tlfnr) {
        this.tlfnr = tlfnr;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}


