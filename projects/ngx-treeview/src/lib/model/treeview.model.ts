type IconPosition = 'suffix' | 'prefix';
export interface NgxTreeViewOptions {
    /*Key to denote the parent in the treeData*/
    nodeNameProperty?: string;
    /*Key to denote the children in the treeData*/
    childrenProperty?: string;
    /*Material Icon to expand treeview*/
    expandMaterialIcon?: string;
    /*Material Icon to collapse treeview*/
    collapseMaterialIcon?: string;
    /*Hide the expand/collapse icons*/
    showExpandCollapseIcon?: boolean;
    /*Placement of treeview icon*/
    iconPosition?: IconPosition;
    /*Placement of Icon when passed with the tree Data*/
    nodeIconPosition?: IconPosition;
    /*To show the checkbox along with the tree data*/
    showCheckbox?: boolean;
}


export class TreeNode {
    id?: number;
    name?: string;
    iconPath?: string;
    children?: TreeNode[];
    metadata?: Object;
}

export class FlatTreeNode {
    public node?: TreeNode | Object;
    public level?: number = 0;
    public expandable?= false;
    public isLoading?= false;
}

export class NestedTreeNode {

}