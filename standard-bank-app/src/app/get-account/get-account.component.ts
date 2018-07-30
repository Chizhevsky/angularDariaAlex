import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.scss']
})
export class GetAccountComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background', '#f7f7f7');
  }

  ngOnInit() {
  }

}
