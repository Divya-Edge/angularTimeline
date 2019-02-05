import { Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arrData: string [];
  constructor() {
  }
  ngOnInit() {
    const testUrl = 'assets/Sample.xlsx';
    const oReq = new XMLHttpRequest();
    oReq.open('GET', testUrl, true);
    oReq.responseType = 'arraybuffer';
    const _this = this;

    oReq.onload = function(e) {
      const arraybuffer = oReq.response;
      /* convert data to binary string */
      const data = new Uint8Array(arraybuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]);
        //  console.log("Data"+data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary'});
     const first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      const worksheet = workbook.Sheets[first_sheet_name];
      // const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header: 1, raw: true});
      const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { raw:  true, defval:  null });
      const jsonOut = JSON.stringify(json);
       console.log('test' + jsonOut);
       // console.log(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { raw: true, defval: null }));
       _this.arrData = json as string[];
    };
    oReq.send();
    }
  }

