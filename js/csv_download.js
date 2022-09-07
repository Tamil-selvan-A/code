const objectToCsv = function (data) {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    for (const row of data) {
        const values = headers.map(header => {
            const val = row[header]
            return `"${val}"`;
        });
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
};

const data = [{
    "firstname": "gee,,ks",
    "lastname": "org",
    "age": 12
}];

// Data passed as parameter 
const csvString = objectToCsv(data);
console.log(csvString);
var fileName = 'file.csv';
var fileURL = window.URL.createObjectURL(new Blob([csvString], { type: 'application/csv' }));
var fileLink = document.createElement('a');
fileLink.href = fileURL;
fileLink.setAttribute('download', fileName);
document.body.appendChild(fileLink);
fileLink.click();
