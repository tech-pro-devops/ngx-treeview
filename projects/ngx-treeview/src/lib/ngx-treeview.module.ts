import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxTreeviewComponent } from './ngx-treeview.component';
import { CommonModule } from '@angular/common';
import { NgxTreeviewDynamicTemplate } from './helper/ngx-treeview-dynamic-template';
import { NgxTreeviewService } from './ngx-treeview.service';

@NgModule({
  declarations: [
    NgxTreeviewComponent,
    NgxTreeviewDynamicTemplate
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatTreeModule,
    NgxTreeviewComponent,
    MatIconModule,
    FlexLayoutModule
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
