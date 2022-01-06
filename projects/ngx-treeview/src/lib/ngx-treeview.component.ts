import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, merge} from 'rxjs';

import { FlatTreeNode, NgxTreeViewOptions, TreeNode } from './model/treeview.model';
@Component({
  selector: 'ngx-treeview',
  templateUrl: './ngx-treeview.component.html',
  styleUrls: ['./ngx-treeview.component.scss'] 
})
export class NgxTreeviewComponent implements OnInit {
  @Input() data: TreeNode[] | Object[] = [];
  @Input() options : NgxTreeViewOptions;
  @Input() template : Component;
  @Output() callbackHandler = new EventEmitter();

  defaultOptions: NgxTreeViewOptions = {
    nodeNameProperty: 'name',
    childrenProperty: 'children',
    expandMaterialIcon: 'chevron_right',
    collapseMaterialIcon: 'expand_more',
    iconPosition: 'prefix',
    nodeIconPosition: 'prefix',
    showExpandCollapseIcon: false
  }
  
  treeControl: FlatTreeControl<FlatTreeNode>;
  treeFlattener: MatTreeFlattener<TreeNode, FlatTreeNode>;
  dataSource: MatTreeFlatDataSource<TreeNode, FlatTreeNode>;

  constructor() { 

  }

  ngOnInit(): void {
    this.initializeOptions();
    this.treeControl = new FlatTreeControl<any>(this.getLevel, this.isExpandable)
    this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node[this.options.childrenProperty]);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = this.data;
  }
  
  private initializeOptions(): void {
    this.options = Object.assign(this.defaultOptions, this.options); 
  }

  getLevel = (flatTreeNode: FlatTreeNode) => flatTreeNode.level;
  isExpandable = (flatTreeNode: FlatTreeNode) => flatTreeNode.expandable;
  hasChild = (_: number, _flatTreeNode: FlatTreeNode) => _flatTreeNode.expandable;
  
  private _transformer = (treeNode: TreeNode | Object, level: number): FlatTreeNode => {
    return {
      node : treeNode,
      expandable: !!treeNode[this.options.childrenProperty] && treeNode[this.options.childrenProperty].length > 0,
      level: level,
    }
  }

  callbackFn(event){
    if(Object.keys(event).length > 0){
      this.callbackHandler.emit(event);
    }
  }

}

/**
 * Todo:
 * Use Ng Template
 * Count Option Discussion - Pros
 * Support for both Material Iocn and External Asset Icons
 * 
 */