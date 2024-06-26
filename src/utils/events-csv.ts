import { formatDate } from "@/utils/helpers";
import { IEvent } from "@/types/Event";

export function exportToCSV(data: IEvent[]) {
    // Define the headers you want to include
    const headers = ["ID", "Actor ID", "Actor Name", "Email (Target Name)", "Action Name", "Formatted Date", "Date"];
    const csvRows = [headers.join(',')];

    // Map through the data and format each row according to the desired structure
    for (const row of data) {
        const values = [
            row.id,
            row.actor_id,
            row.actor_name,
            row.target_name,
            row.action.name,
            formatDate(row.occurred_at),
            row.occurred_at
        ];
        csvRows.push(values.map(value => JSON.stringify(value)).join(','));
    }

    const csvString = csvRows.join('\n');

    downloadCSV(csvString)
}

function downloadCSV(csvString: string) {
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    const date = new Date(Date.now())
    const filename = 'events -- ' + formatDate(date.toString()) + '.csv'
    a.setAttribute('download', filename)
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
  