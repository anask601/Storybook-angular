import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  @Input() numberOfChildren: number = 4;
  @Input() direction: string = 'row';
  @Input() spacing: number = 2;
  @Input() wrap: boolean = false;

  items: number[] = [];
  style: any;

  constructor() {}
  ngOnInit(): void {
    this.items = [...Array(this.numberOfChildren).keys()].map((n) => n + 1);
    // let scale = 1;
    // if (
    //   this.direction === 'row-reverse' ||
    //   this.direction === 'column-reverse'
    // ) {
    //   scale = -1;
    // }
    const gap = this.spacing + 'rem';

    this.style = {
      display: 'flex',
      'flex-direction': this.direction,
      'flex-wrap': this.wrap ? 'wrap' : 'nowrap',
      'justify-content':
        this.direction === 'row' || this.direction === 'row-reverse'
          ? 'flex-start'
          : 'center',
      'align-items':
        this.direction === 'column' || this.direction === 'column-reverse'
          ? 'flex-start'
          : 'center',
      gap,
      // transform: `scale(${scale}, 1)`,
    };
  }
}
