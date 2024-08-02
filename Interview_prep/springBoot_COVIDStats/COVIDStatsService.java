import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class COVIDStatsService {

  @Autowired
  private COVIDStatsRepository repository;

  public List<COVIDStats> getTop5SortedByCases() {
    return repository.findTop5ByCases();
  }

  public int getTotalSum(String field) {
    switch (field) {
      case "cases":
        return repository.getTotalCases();
      case "deaths":
        return repository.getTotalDeaths();
      case "recovered":
        return repository.getTotalRecovered();
      default:
        throw new IllegalArgumentException("Invalid field: " + field);
    }
  }
}
