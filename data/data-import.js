const fs = require('fs');
const path = require('path');

// Path to the CSV file
const csvFilePath = path.join(__dirname, '../input.csv');

// Simple CSV parser (handles quoted fields and commas)
function parseCSV(data) {
  const lines = data.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    // Use regex to split on commas not inside quotes
    const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;
    const matches = lines[i].match(regex);
    if (!matches) continue;

    // Remove quotes and trim
    const values = matches.map(val => val.replace(/^"|"$/g, '').trim());
    const item = {};
    headers.forEach((header, idx) => {
      item[header] = values[idx];
    });
    rows.push(item);
  }
  return rows;
}

// Read and process the CSV file
fs.readFile(csvFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }
  const items = parseCSV(data);

  items.forEach((item, idx) => {
    console.log(`Item ${idx + 1}:`, item);
  });
});