import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;

  constructor() {
  }

  ngOnInit() {
  }

  UpdateProfile(name: HTMLInputElement, age: HTMLInputElement): boolean {
    console.log(`${name.value},${age.value}`);
    return false;
  }

}
