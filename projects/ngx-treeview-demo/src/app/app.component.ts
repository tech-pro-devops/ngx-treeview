import { Component } from '@angular/core';
import { TreeNode } from 'projects/ngx-treeview/src/lib/model/tree-node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-treeview-demo';
  treeData: TreeNode[] = [
    {
      id: 1,
      name: 'India',
      children: [
        {
          id: 4,
          name: 'Chandigarh',
          children: [

          ]
        }
      ]
    },
    {
      id: 2,
      name: 'USA',
      children: [

      ]
    },
    {
      id: 3,
      name: 'Canada',
      children: [

      ]
    }
  ]
}
