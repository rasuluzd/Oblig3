package oslomet.oblig3_data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoController {
    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreMotorvogn(Kinobillett innBillett){
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentAlle")
    private List<Kinobillett> hentAlle(){
        return rep.hentAlleBillettter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }
}
