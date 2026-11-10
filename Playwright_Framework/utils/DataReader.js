import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export class DataReader{

static readJsonData(filename){
    let FileContent = fs.readFileSync(filename, 'utf8')
    let jsonData = JSON.parse(FileContent)
    return jsonData
}

static readCSVData(filename){
    let FileContent = fs.readFileSync(filename)
    let jsonData = parse(FileContent,{
            columns: true,
            skip_empty_lines: true
        })
        return jsonData
}
static readExcelData(filename){

const xlwkbk = xlsx.readFileSync(filename);
const sheetname0 = xlwkbk.SheetNames[0];
const sheetdata = xlwkbk.Sheets[sheetname0];
const records = xlsx.utils.sheet_to_json(sheetdata, { defval: '' });
    return records;
}

}
