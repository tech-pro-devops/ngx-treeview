import {
  Component,NgModule,Directive,Output, Input,EventEmitter, ViewContainerRef,Inject, ComponentFactoryResolver
} from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
})
class DynamicHtmlModule {}

@Directive({
  selector: 'ngx-treeview-dynamic-template' 
})
export class NgxTreeviewDynamicTemplate {

  @Input() template:Component;
  @Input() nodeData;
  @Input() treeControl;
  @Output() callbackFn = new EventEmitter();

  factoryResolver;
  rootViewContainer;
  viewRef;
  
  constructor(@Inject(ComponentFactoryResolver) factoryResolver:ComponentFactoryResolver,@Inject(ViewContainerRef) viewContainerRef:ViewContainerRef) {
    this.factoryResolver = factoryResolver;
    this.viewRef = viewContainerRef;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  ngOnChanges() {
    if (!this.template) return;
    this.setRootViewContainerRef(this.viewRef);
    const factory = this.factoryResolver.resolveComponentFactory(this.template);
    const component = factory.create(this.rootViewContainer.parentInjector);
    if(this.nodeData){
      component.instance.nodeData = this.nodeData;
    }
    if(this.treeControl){
      component.instance.treeControl = this.treeControl;
    }
    if(component.instance.observeVariable){
      component.instance.observeVariable.subscribe(result=>{
        this.callbackFn.emit(result);
      })
    }
    this.rootViewContainer.insert(component.hostView);
  }
}