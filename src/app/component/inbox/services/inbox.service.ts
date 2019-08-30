import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InboxModel } from '../models/inbox.model';
;

var API_INBOX = '';

@Injectable()
export class InboxService {

	constructor(private http: HttpClient) {
		API_INBOX = "http://demo3653135.mockable.io/getDataInbox";
	}

	getAllInboxData(): Observable<InboxModel> {
        return this.http.get<InboxModel>(API_INBOX);
    }

}
