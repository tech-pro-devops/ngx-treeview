type IconPosition = 'suffix' | 'prefix';
/**
 * @description
 * Used to pass the options to configure the treeview
 */
export interface NgxTreeViewOptions {
    /**
     * @description
     * Key to denote the parent in the treeData
    */
    nodeNameProperty?: string;
    /**
     * @description
     * Key to denote the children in the treeData
    */
    childrenProperty?: string;
    /**
     * @description
     * Material Icon to expand treeview
    */
    expandMaterialIcon?: string;
    /**
     * @description
     * Material Icon to collapse treeview
    */
    collapseMaterialIcon?: string;
    /**
     * @description
     * Hide the expand/collapse icons
    */
    showExpandCollapseIcon?: boolean;
    /**
     * @description
     * Placement of treeview icon
    */
    iconPosition?: IconPosition;
    /**
     * @description
     * Placement of Icon when passed with the tree Data
    */
    nodeIconPosition?: IconPosition;
    /**
     * @description
     * To show the checkbox along with the tree data
    */
    showCheckbox?: boolean;
    /**
     * @description
     * To show the child count with the parent node
    */
    showChildCount?: boolean;
}

/**
 * @description
 * Used to pass the data to create the treeview
 */
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