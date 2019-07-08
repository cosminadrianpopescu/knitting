import {Pipe, PipeTransform} from '@angular/core';
import {RowService} from 'src/modules/services/row';
import {Row} from 'src/modules/models/row';

@Pipe({name: 'showLastRow'})
export class ShowLastRowPipe implements PipeTransform {
    transform(idx: number, n: number): boolean {
        return idx < n - 2;
    }
}

@Pipe({name: 'showFirstRow'})
export class ShowFirtsRowPipe implements PipeTransform {
    transform(idx: number): boolean {
        return idx >= 2;
    }
}

@Pipe({name: 'showDotsUp'})
export class ShowDotsUpPipe implements PipeTransform {
    transform(idx: number, n: number): boolean {
        return idx < n - 3;
    }
}

@Pipe({name: 'showDotsDown'})
export class ShowDotsDownPipe implements PipeTransform {
    transform(idx: number): boolean {
        return idx >= 3;
    }
}

@Pipe({name: 'showNextRow'})
export class ShowNextRowPipe implements PipeTransform {
    transform(idx: number, n: number): boolean {
        return idx < n - 1;
    }
}

@Pipe({name: 'showPrevRow'})
export class ShowPrevRowPipe implements PipeTransform {
    transform(idx: number): boolean {
        return idx >= 1;
    }
}

@Pipe({name: 'isCurrentDisplayed'})
export class IsCurrentDisplayedPipe implements PipeTransform {
    constructor(private _service: RowService){}
    transform(row: Row) {
        return row.idx === this._service.current.idx;
    }
}
