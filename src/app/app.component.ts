import { Component, OnInit, Type, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  value: number = 0;

  ngOnInit(): void {}

  increaseValue() {
    console.log('Increase working successfully');
    this.value += 1;
  }

  decreaseValue() {
    console.log('Decrease working successfully');
    this.value -= 1;
    if (this.value <= 0) {
      this.value = 0;
    }
  }
}
