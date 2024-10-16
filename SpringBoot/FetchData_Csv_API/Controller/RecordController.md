@RestController
@RequestMapping("/api/records")
public class RecordController {

    @Autowired
    private RecordService recordService;

    @GetMapping(value = "/csv", produces = "text/csv")
    public void getRecordsAsCsv(@RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
                                HttpServletResponse response) throws IOException {

        // Set CSV file headers
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=records.csv");

        // Fetch records between the dates
        List<Record> records = recordService.getRecordsBetweenDates(startDate, endDate);

        // Write to CSV
        CsvExportUtil.writeRecordsToCsv(records, response.getWriter());
    }
}
