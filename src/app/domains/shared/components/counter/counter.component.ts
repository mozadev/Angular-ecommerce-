import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // no ASYNC
    // BEFORE RENDER
    // ONE TIME
    console.log('constructor')
    console.log('-'.repeat(10))
  }
  ngOnChanges(changes: SimpleChanges) {
    //before  and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes)
    const duration = changes['duration'];
    if (duration && duration.currentValue != duration.previousValue) {
      this.doSomething()
    }
  }

  ngOnInit() {
    //after render
    // one  time
    //async, then, subs

    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
        console.log('run interval')
        this.counter.update(statePrev => statePrev + 1)
    }, 1000)

  }

  ngAfterViewInit() {
    //after render
    // hijos ya fueron  renderizados
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10));
  }

  ngDestroiy() {
    console.log('ngDestroiy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }


  doSomething() {
    console.log('change duration')
  }

}
