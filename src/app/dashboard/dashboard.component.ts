import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../model';
import { Service } from '../my.service';
import { RequestService } from '../request/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  data$!: Observable<Model[]>;
  message!: any;

  constructor(private service: Service, private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    //docker thing
    //https://stackoverflow.com/questions/50830418/angular-universal-does-not-render-data-from-api-requests
    this.data$ = this.service.getData();

    //or use of browser api in 3rd party...
    // if(isPlatformBrowser(this.platformId)) {
      // console.log(window.location);
    // };

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

  doSomething() {
    alert('hello world');
  }
}
