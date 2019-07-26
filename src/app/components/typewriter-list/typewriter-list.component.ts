import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-typewriter-list',
  templateUrl: './typewriter-list.component.html',
  styleUrls: ['./typewriter-list.component.css']
})
export class TypewriterListComponent implements OnInit, OnChanges {

  @Input() fontWeight: string;
  @Input() fontSize: string;
  @Input() fontColor: string;
  @Input() textList: string[];
  @Input() languageEvent: Observable<void>;
  @Input() speed = 200;

  private i = 0;

  display = '';
  text = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.textList && !(changes.textList.firstChange)) {
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.languageEvent.subscribe(() => {
      this.display = '';
    });
    this.textList.forEach(text => {
      this.text = text;
      this.typeWriter(this);
    });
  }

  typeWriter(that) {
    const length = that.text.length;
    const currentLength = that.display.length;
    if (currentLength < length) {
      that.display += that.text[currentLength];
      setTimeout(that.typeWriter, that.speed, that);
    }
  }
}
