package corvetta77.Reports;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class ReportsController {

    @GetMapping
    public String index() {
        return "index";
    }
}