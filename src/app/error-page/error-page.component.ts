import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data['message'];
    //console.log(this.route.snapshot.data['message']);
    this.route.data.subscribe( //subscribe to route.data since the "data" is passed from routing module of type "Data" imported from router
      (data:Data) => {
        console.log(data);
        this.errorMessage = data['message'];
      }
    );
  }

}
