import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const select = (el: any, all = false) => {
      el = el.trim();
      if (all) {
        return [document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type: any, el: any, listener: any, all = false) => {
      if (all) {
        select(el, all).forEach((e: any) => e.addEventListener(type, listener));
      } else {
        select(el, all).addEventListener(type, listener);
      }
    };

    if (select('.toggle-sidebar-btn')) {
      on('click', '.toggle-sidebar-btn', function (e: any) {
        select('body').classList.toggle('toggle-sidebar');
      });
    }
  }
}
