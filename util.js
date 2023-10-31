import { readFile,utils } from 'xlsx';
import { join } from 'path';
import { cwd } from 'process';
import { useEffect } from 'react';

export const getAllNotice =  async () => {
  
    try{
      const res = await fetch('/api/news-notice/');
      const data  = await res.json();
      return data.msg;
    }
    catch(err){
      return err;
    }
  }
  
  export const getSingleNotice = async (id) => {
    const allNotice = await getAllNotice();
    const singleNews = allNotice.find(item => item.id === id);
    return singleNews;
  }



  export const Xl_to_Sql =  (path) => {
    let workbook =  readFile(path);
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let range = utils.decode_range(worksheet["!ref"]);

    let data = [];
    let columnNames = {};
  
    for (let col = range.s.c; col <= range.e.c; col++) {
      let cellAddress = utils.encode_cell({ r: range.s.r, c: col });
      let cell = worksheet[cellAddress];
      columnNames[col] = cell ? cell.v : `column${col - range.s.c + 1}`;
    }
  
    for (let row = range.s.r + 1; row <= range.e.r; row++) {
      let rowData = {};
  
      for (let col = range.s.c; col <= range.e.c; col++) {
        let cellAddress = utils.encode_cell({ r: row, c: col });
        let cell = worksheet[cellAddress];
        rowData[columnNames[col]] = cell ? cell.v : null;
      }
  
      data.push(rowData);
      console.log(data,'workbook data ###########################3')
    }
    return data;
  };

