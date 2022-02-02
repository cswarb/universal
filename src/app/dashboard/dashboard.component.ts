import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../model';
import { Service } from '../my.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  data$!: Observable<Model[]>;
  message!: any;

  constructor(private service: Service, private http: HttpClient) { }

  ngOnInit() {
    //docker thing
    //https://stackoverflow.com/questions/50830418/angular-universal-does-not-render-data-from-api-requests
    this.data$ = this.service.getData();

    //Need absolute urls to satisfy ssr
    // https://stackoverflow.com/questions/61450145/how-to-resolve-error-networkerror-at-xmlhttprequest-send-dist-fxcore-server
    // https://stackoverflow.com/questions/61449517/is-there-something-wrong-with-making-an-http-request-in-the-ngoninit-of-a-compon
    // Using absolute URLs for HTTP - https://angular.io/guide/universal#using-absolute-urls-for-server-requests
    this.http.get('/assets/text.txt', {
      responseType: 'text'
    }).subscribe(response => {
      console.log(response);
      this.message = response;
    });
  }
}
