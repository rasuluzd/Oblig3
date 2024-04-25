package oslomet.data1700_oblig3;

public class Kinobilett {

    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int tlfnr;
    private String epost;

    public Kinobilett(String film,int antall,String fornavn,String etternavn,int tlfnr, String epost){
        this.film=film;
        this.antall=antall;
        this.fornavn=fornavn;
        this.etternavn=etternavn;
        this.tlfnr=tlfnr;
        this.epost=epost;
    }
    public Kinobilett(){

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

    public int getTlfnr() {
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

    public void setTlfnr(int tlfnr) {
        this.tlfnr = tlfnr;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
