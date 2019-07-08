import {ReplaySubject} from 'rxjs';
import {Row} from 'src/modules/models/row';
import {Injectable} from '@angular/core';
import {DataService} from 'src/modules/services/data';
import {StorageService} from 'src/modules/services/storage.service';

@Injectable()
export class RowService {
    public currentRow$: ReplaySubject<Row> = new ReplaySubject<Row>(1);
    public rows: Array<Row> = [];
    private _rowIdx = 0;

    constructor(private _data: DataService, private _storage: StorageService) {
        this.rows = this._data.data;
        const _saved = this._storage.get('currentRow');
        this._rowIdx = _saved ? parseInt(_saved) : 0;
        this.go(this._rowIdx);
    }

    public getIdx(direction: -1 | 1, startIdx?: number): number {
        let result = (typeof(startIdx) != 'undefined' ? startIdx : this._rowIdx) + direction;
        if (result > this.rows.length - 1) {
            result = 0;
        }
        else if (result < 0) {
            result = 0;
        }
        
        return result;
    }

    private _goDir(direction: -1 | 1) {
        this._rowIdx = this.getIdx(direction);
        this.go(this._rowIdx);
    }

    public next() {
        this._goDir(1);
    }

    public prev() {
        this._goDir(-1);
    }
    
    public go(idx: number) {
        this._rowIdx = idx;
        this._storage.set('currentRow', idx);
        this.currentRow$.next(this.rows[idx]);
    }

    public get rowsNo() {
        return this.rows.length;
    }

    public get current() {
        return this.rows[this._rowIdx];
    }
}
