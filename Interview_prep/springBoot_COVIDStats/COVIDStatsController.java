import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class COVIDStatsController {

  @Autowired
  private COVIDStatsService service;

  @GetMapping("/covid-stats/top5")
  public List<COVIDStats> getTop5SortedByCases(@RequestParam String sortBy) {
    if (!"cases".equals(sortBy)) {
      throw new IllegalArgumentException("Invalid sortBy parameter: " + sortBy);
    }
    return service.getTop5SortedByCases();
  }

  @GetMapping("/covid-stats/sum")
  public int getTotalSum(@RequestParam String field) {
    return service.getTotalSum(field);
  }
}
