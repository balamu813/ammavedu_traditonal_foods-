// generate_products_csv.js
// This script reads product data from './products-data.js' and writes a CSV file with an overall product list.
import { PRODUCTS_RAW } from './products-data.js';
import fs from 'fs';
import path from 'path';

const headers = ['id','name','category','tamilName','sizes','benefits','usage'];

const escapeCsv = (value) => {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // Escape double quotes by doubling them, and wrap field in quotes if it contains commas, quotes or newlines
  const escaped = str.replace(/"/g, '""');
  if (/[",\n]/.test(escaped)) {
    return `"${escaped}"`;
  }
  return escaped;
};

const rows = PRODUCTS_RAW.map(product => {
  const sizes = product.sizes ? product.sizes.join(';') : '';
  return [
    escapeCsv(product.id),
    escapeCsv(product.name),
    escapeCsv(product.category),
    escapeCsv(product.tamilName || ''),
    escapeCsv(sizes),
    escapeCsv(product.benefits || ''),
    escapeCsv(product.usage || '')
  ].join(',');
});

const csvContent = [headers.join(','), ...rows].join('\n');

const outputPath = path.resolve('./products.csv');
fs.writeFileSync(outputPath, csvContent, { encoding: 'utf8' });
console.log('CSV file generated at', outputPath);
