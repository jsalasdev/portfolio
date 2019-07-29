import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('header') headerTextElement: ElementRef;
  languageSubject: Subject<string> = new Subject<string>();

  textHello = '';
  textIam = '';
  textInterests = '';
  textCheckout = '';
  textList = [];
  hobbies: Typed;

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.initHeader();
  }

  changeLanguage(event) {
    this.translate.setDefaultLang(event);
    this.initHeader();
    this.languageSubject.next();
  }

  initHeader() {
    this.translate.get('header.hobbies').subscribe(res => {
      this.textList = res;
      if (this.hobbies) {
        this.hobbies.destroy();
      }
      this.hobbies = new Typed('#hobbies', {
        strings: this.textList,
        typeSpeed: 70,
        backSpeed: 10,
        loop: true,
        cursorChar: '_'
      });
    });
    this.translate.get('header.hello').subscribe(res => {
      this.textHello = res;
    });
    this.translate.get('header.iam').subscribe(res => {
      this.textIam = res;
    });
    this.translate.get('header.interests').subscribe(res => {
      this.textInterests = res;
    });
    this.translate.get('header.checkout').subscribe(res => {
      this.textCheckout = res;
    });
  }

}
