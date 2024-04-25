package oslomet.data1700_oblig3;

import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KinoController {
    private final List<Kinobilett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreMotorvogn(Kinobilett innBillett){
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    private List<Kinobilett> hentAlle(){
        return alleBilletter;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleBilletter.clear();
    }
}
