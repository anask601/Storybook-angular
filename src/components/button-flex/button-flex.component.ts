import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-flex',
  templateUrl: './button-flex.component.html',
  styleUrls: ['./button-flex.component.scss'],
})
export class ButtonFlexComponent implements OnInit {
  @Input() label: string = 'Button';
  @Input() backgroundColor: string = 'red';
  @Input() size: string = 'lg';
  style: any;
  constructor() {}
  ngOnInit(): void {
    let scale = 1;
    if (this.size === 'sm') scale = 0.75;
    if (this.size === 'lg') scale = 1.5;
    const backgroundColor = this.backgroundColor;
    this.style = {
      backgroundColor,
      padding: `${scale * 0.5}rem ${scale * 1}rem`,
      border: 'none',
    };
  }
  handleClick(args: any) {
    args;
  }
}
