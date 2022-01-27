import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-module',
  templateUrl: './lazy-module.component.html',
  styleUrls: ['./lazy-module.component.css']
})
export class LazyModuleComponent implements OnInit {
  message!: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/text.txt', {
      responseType: 'text'
    }).subscribe(response => {
      console.log(response);
      this.message = response;
    });
  }

}
