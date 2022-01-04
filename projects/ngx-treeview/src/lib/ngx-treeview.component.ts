import { Component, Input, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';

import { FlatTreeNode, TreeNode } from './model/tree-node.model';

@Component({
  selector: 'ngx-treeview',
  templateUrl: './ngx-treeview.component.html',
  styleUrls: ['./ngx-treeview.component.scss'] 
})
export class NgxTreeviewComponent implements OnInit {
  @Input() data: TreeNode[] | Object[] = [];
  @Input() treeNodeNameProperty: string = 'name';
  @Input() childrenProperty: string = 'children';

  treeControl: FlatTreeControl<FlatTreeNode>;
  treeFlattener: MatTreeFlattener<TreeNode, FlatTreeNode>;
  dataSource: MatTreeFlatDataSource<TreeNode, FlatTreeNode>;

  constructor() { 

  }

  ngOnInit(): void {
    this.treeControl = new FlatTreeControl<any>(this.getLevel, this.isExpandable)
    this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node[this.childrenProperty]);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = this.data;
  }

  getLevel = (flatTreeNode: FlatTreeNode) => flatTreeNode.level;
  isExpandable = (flatTreeNode: FlatTreeNode) => flatTreeNode.expandable;
  hasChild = (_: number, _flatTreeNode: FlatTreeNode) => _flatTreeNode.expandable;
  
  private _transformer = (treeNode: TreeNode | Object, level: number): FlatTreeNode => {
    return {
      node : treeNode,
      expandable: !!treeNode[this.childrenProperty] && treeNode[this.childrenProperty].length > 0,
      level: level,
    }
  }



}
