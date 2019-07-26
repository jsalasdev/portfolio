import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

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
  textThis = '';
  textList = [];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.initHeader();
  }

  changeLanguage(event) {
    this.translate.setDefaultLang(event);
    this.initHeader();
    this.languageSubject.next();
  }

  initHeader() {
    this.translate.get('header.list').subscribe(res => {
      this.textList = res;
    });
    this.translate.get('header.hello').subscribe(res => {
      this.textHello = res;
    });
    this.translate.get('header.iam').subscribe(res => {
      this.textIam = res;
    });
    this.translate.get('header.this').subscribe(res => {
      this.textThis = res;
    });
  }

}
