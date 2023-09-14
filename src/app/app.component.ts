import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'techup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'techupdemo';
  constructor() {}
  ngOnInit(): void {}
}
