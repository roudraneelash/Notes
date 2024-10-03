@Service
public class RecordService {

    @Autowired
    private RecordRepository recordRepository;

    public List<Record> getRecordsBetweenDates(LocalDate startDate, LocalDate endDate) {
        return recordRepository.findAllByDateBetween(startDate, endDate);
    }
}
