import {Injectable} from '@angular/core';
import {Row} from 'src/modules/models/row';
import {SideType} from 'src/modules/models/side-type';
import {Live} from 'src/modules/models/data';

@Injectable()
export class DataService {
    private static _data: Array<string> = Live.data;

    public get data(): Array<Row>{
        const rows = DataService._data;
        return rows.map((r, idx) => <Row>{data: r, side: idx % 2 == 0 ? SideType.RIGHT_SIDE: SideType.WRONG_SIDE, idx: idx});
    }
}
