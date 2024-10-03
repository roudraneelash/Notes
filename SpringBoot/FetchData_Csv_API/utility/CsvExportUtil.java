import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.IOException;
import java.io.Writer;
import java.util.List;

public class CsvExportUtil {

    public static void writeRecordsToCsv(List<Record> records, Writer writer) throws IOException {
        try (CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT.withHeader("ID", "Name", "Date", "Value"))) {
            for (Record record : records) {
                csvPrinter.printRecord(record.getId(), record.getName(), record.getDate(), record.getValue());
            }
        }
    }
}
