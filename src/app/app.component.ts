import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('header') headerTextElement: ElementRef;

  private SPEED = 100;
  private i = 0;

  private text = '';
  display = '';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.initHeader();
  }

  typeWriter(that) {
    const length = that.text.length;
    const currentLength = that.display.length;
    if (currentLength < length) {
      that.display += that.text[currentLength];
      setTimeout(that.typeWriter, 100, that);
    }
  }

  changeLanguage(event) {
    this.translate.setDefaultLang(event);
    this.initHeader();
  }

  initHeader() {
    this.text = '';
    this.display = '';
    this.translate.get('header').subscribe(res => {
      this.text = res;
      this.typeWriter(this);
    });
  }

}
