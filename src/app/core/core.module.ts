import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class CoreModule { }