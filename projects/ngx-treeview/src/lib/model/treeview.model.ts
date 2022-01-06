type IconPosition = 'suffix' | 'prefix';
export interface NgxTreeViewOptions {
    nodeNameProperty?: string;
    childrenProperty?: string;
    expandMaterialIcon?: string;
    collapseMaterialIcon?: string;
    showExpandCollapseIcon?: boolean;
    iconPosition?: IconPosition;
    nodeIconPosition?: IconPosition;
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