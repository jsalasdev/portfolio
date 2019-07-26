import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit, OnChanges {

  @Input() fontWeight: string;
  @Input() fontSize: string;
  @Input() fontColor: string;
  @Input() text: string;
  @Input() languageEvent: Observable<void>;
  @Input() speed = 200;

  private SPEED = 200;
  private i = 0;

  display = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.text && !(changes.text.firstChange)) {
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.languageEvent.subscribe(() => {
      this.display = '';
    });
    this.typeWriter(this);
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
