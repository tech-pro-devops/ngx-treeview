import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NgxTreeviewComponent } from './ngx-treeview.component';
import { CommonModule } from '@angular/common';
import { NgxTreeviewDynamicTemplate } from './helper/ngx-treeview-dynamic-template';
import { NgxTreeviewService } from './ngx-treeview.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NgxTreeviewComponent,
    NgxTreeviewDynamicTemplate
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule
  ],
  exports: [
    NgxTreeviewComponent
  ]
})
export class NgxTreeviewModule {
  static forRoot(): ModuleWithProviders<NgxTreeviewModule> {
    return {
      ngModule: NgxTreeviewModule,
      providers: [NgxTreeviewService]
    };
  }
}
