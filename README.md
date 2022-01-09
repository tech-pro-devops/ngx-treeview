# ngx-treeview
> Angular Material Treeview Component. 

[Stackblitz](https://stackblitz.com/edit/angular-ivy-gbgatx)

[Demo](https://angular-ivy-gbgatx.stackblitz.io)

## Installation
    npm install --save @tech-pro/ngx-treeview

## Usage

### Import `NgxTreeviewModule`

```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTreeviewModule } from '@tech-pro/ngx-treeview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxTreeviewModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Place the `ngx-treeview` tag in your template file

```html
<ngx-treeview [data]="simpleTreeData"></ngx-treeview>
```




## NgxTreeViewOptions(Config/Options)

Use these properties to customize the treeview component.

| Name | Description | Type | Default | Optional |
| --- | --- | --- | --- | --- |
| nodeNameProperty | Key to denote the parent in the treeData | string | `name` | true |
| childrenProperty | Key to denote the children in the treeData | string | `children` | true |
| expandMaterialIcon  | Material Icon to expand treeview | string | `chevron_right` | true |
| collapseMaterialIcon | Material Icon to collapse treeview | string | `expand_more` | true |
| iconPosition | Placement of treeview icon | string | `prefix` | true |
| nodeIconPosition | Placement of Icon when passed with the tree Data | string | `prefix` | true |
| showExpandCollapseIcon | Hide the expand/collapse icons | boolean | `true` | true |
| showCheckbox | To show the checkbox along with the tree data | boolean | `false` | true |