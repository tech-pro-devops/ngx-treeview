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
  @Output() selectionCallback = new EventEmitter();

  defaultOptions: NgxTreeViewOptions = {
    nodeNameProperty: 'name',
    childrenProperty: 'children',
    expandMaterialIcon: 'chevron_right',
    collapseMaterialIcon: 'expand_more',
    iconPosition: 'prefix',
    nodeIconPosition: 'prefix',
    showExpandCollapseIcon: true,
    showCheckbox : false
  }
  
  treeControl: FlatTreeControl<FlatTreeNode>;
  treeFlattener: MatTreeFlattener<TreeNode, FlatTreeNode>;
  dataSource: MatTreeFlatDataSource<TreeNode, FlatTreeNode>;
  checkboxSelection = new SelectionModel<FlatTreeNode>(true);

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

  toggleTree(treeNode,matTreeNodeToggle){
    if(matTreeNodeToggle){
      this.treeControl.toggle(treeNode)
    }
  }

  getIcon(treeNode,matTreeNodeToggle){
    if(matTreeNodeToggle){
      return this.treeControl.isExpanded(treeNode) ? this.options?.collapseMaterialIcon : this.options?.expandMaterialIcon
    }
    return '';
  }

  callbackFn(event){
    if(Object.keys(event).length > 0){
      this.callbackHandler.emit(event);
    }
  }

  leafItemSelectionToggle(node: FlatTreeNode): void {
    this.checkboxSelection.toggle(node);
    this.checkAllParentsSelection(node);
    this.selectionCallback.emit(this.checkboxSelection.selected);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: FlatTreeNode): void {
    let parent: FlatTreeNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: FlatTreeNode): FlatTreeNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: FlatTreeNode): void {
    const nodeSelected = this.checkboxSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checkboxSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checkboxSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checkboxSelection.select(node);
    }
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: FlatTreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checkboxSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: FlatTreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checkboxSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  itemSelectionToggle(node: FlatTreeNode): void {
    this.checkboxSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checkboxSelection.isSelected(node)
      ? this.checkboxSelection.select(...descendants)
      : this.checkboxSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checkboxSelection.isSelected(child));
    this.checkAllParentsSelection(node);
    this.selectionCallback.emit(this.checkboxSelection.selected);
  }

}

/**
 * Todo:
 * Use Ng Template
 * Lazyloading
 * Comments
 * Read me
 * Count Option Discussion - Pros
 * Support for both Material Icon and External Asset Icons
 */