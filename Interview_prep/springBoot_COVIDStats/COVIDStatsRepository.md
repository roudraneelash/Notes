import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface COVIDStatsRepository extends JpaRepository<COVIDStats, Long> {

  // native sql qeuery
  @Query(value = "SELECT * FROM covid_stats ORDER BY cases DESC LIMIT :limit", nativeQuery = true)
  List<COVIDStats> findTopEntriesByCases(@Param("limit") int limit);

  @Query("SELECT SUM(c.cases) FROM COVIDStats c")
  int getTotalCases();

  @Query("SELECT SUM(c.deaths) FROM COVIDStats c")
  int getTotalDeaths();

  @Query("SELECT SUM(c.recovered) FROM COVIDStats c")
  int getTotalRecovered();
}
