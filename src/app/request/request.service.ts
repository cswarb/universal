import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class RequestService {
    constructor(
        @Inject(APP_BASE_HREF) private appbhr: String,
    ) {
        console.log('RequestService >>>>> ', this);
    }
}