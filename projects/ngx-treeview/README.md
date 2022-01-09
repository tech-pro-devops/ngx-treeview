# ngx-treeview
> Angular Material Treeview Component. 

[Stackblitz](https://stackblitz.com/edit/angular-ivy-gbgatx)

[Demo](https://angular-ivy-gbgatx.stackblitz.io)

## Installation
    npm install --save @tech-pro/ngx-treeview

## Pre-requisites
    Install the angular material package
    [Angular Material](https://material.angular.io/guide/getting-started)

    Import Angular Material theme in style.scss: 
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";

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
| showChildCount | To show the child count with the parent node | boolean | `false` | true |

## Callback(Event)

**callbackHandler** - To get the event when we click on the node.
**selectionCallback** - To get the selection Model event when we select the checkbox.


## Example
```typescript
import {Component,OnInit} from '@angular/core';
import { NgxTreeViewOptions, TreeNode } from '@tech-pro/ngx-treeview';

@Component({
  selector: 'app-root',
  template: `
       <ngx-treeview [data]="simpleTreeData" [options]="options"></ngx-treeview>
 `,
  styles: []
})
export class AppComponent implements OnInit{

  simpleTreeData : TreeNode[];
  options: NgxTreeViewOptions = {
    expandMaterialIcon: 'add',
    collapseMaterialIcon: 'remove',
    showExpandCollapseIcon: true,
    showCheckbox : false
  }

    constructor() {}
    
    ngOnInit(){
        this.simpleTreeData = [
      {
        id: 1,
        name: 'India',
        children: [
          {
            id: 4,
            name: 'Chandigarh',
          },
          {
            id: 6,
            name: 'Punjab'
          }
        ]
      },
      {
        id: 2,
        name: 'USA',
        children: [
          {
            id: 7,
            name: 'California'
          },
          {
            id: 8,
            name: 'Arizona'
          }
        ]
      },
      {
        id: 3,
        name: 'Canada',
      }
    ];
    }

}
```