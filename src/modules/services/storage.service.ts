import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
    public set(key, value) {
        localStorage.setItem(key, value);
    }

    public get(key) {
        return localStorage.getItem(key);
    }
}
