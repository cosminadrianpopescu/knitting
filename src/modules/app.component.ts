import { Component } from '@angular/core';
import {RowService} from 'src/modules/services/row';
import {Row} from 'src/modules/models/row';
import {BaseComponent} from 'src/modules/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
    private _currentRow: Row;
    private _displayedRow: Row;
    private _rowsNo: number;
    constructor (private _row: RowService){
        super();
        this._row.currentRow$.subscribe(row => {
            this._displayedRow = row;
            this._currentRow = row;
        });
        this._rowsNo = this._row.rowsNo;
    }

    private _next() {
        this._row.next();
    }
    
    private _select(direction: -1 | 1) {
        const idx = this._row.getIdx(direction, this._displayedRow.idx);
        this._displayedRow = this._row.rows[idx];
    }

    private _makeCurrent() {
        this._row.go(this._displayedRow.idx);
    }

    private _goCurrent() {
        this._row.go(this._currentRow.idx);
    }
}
