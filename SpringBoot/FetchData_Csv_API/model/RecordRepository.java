public interface RecordRepository extends JpaRepository<Record, Long> {

    List<Record> findAllByDateBetween(LocalDate startDate, LocalDate endDate);
}
