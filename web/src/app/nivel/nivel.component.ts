import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {
  user: any;
  book: string;
  sub: any;

  constructor(private route:ActivatedRoute) {
    this.user = localStorage.getItem('user');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.book = params['id'];
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
