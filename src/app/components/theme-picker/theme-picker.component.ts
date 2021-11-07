import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: '.theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  paletteList: string[] = [
    'default',
    'mclaren',
    'ferrari',
    'red-bull',
    'lewis',
    'merc'
  ]

  constructor (
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    console.log(this.document);
  }

  setTheme(theme: string): void {
    if (this.paletteList.includes(theme)) {

      if (theme == this.paletteList[0]) {
        this.renderer.removeAttribute(this.document.documentElement, 'class');
      } else {
        this.renderer.removeAttribute(this.document.documentElement, 'class');
        this.renderer.addClass(this.document.documentElement, theme);
      }
    }
  }

}
