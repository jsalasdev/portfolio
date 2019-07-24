import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() changeLanguageEvent = new EventEmitter<string>();

  public activeLang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  changeLanguage(value) {
    this.activeLang = value;
    this.translate.use(this.activeLang);
    this.changeLanguageEvent.emit(this.activeLang);
  }

}
