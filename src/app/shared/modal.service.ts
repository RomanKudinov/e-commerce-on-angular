import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { Product } from '../model/product.model';
import { ModalResults } from './modal-results.enum';
import { ModalComponent } from '../store/modal/modal.component';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  public modalContainer: ViewContainerRef;
  public state: Subject<ModalResults>;

  constructor(private _cfr: ComponentFactoryResolver) { }

  public init(modalContainer: ViewContainerRef) {
    this.modalContainer = modalContainer;
  }

  // tslint:disable-next-line:no-shadowed-variable
  private _createComponent<ModalComponent>(componentType: { new(...args: any[]): ModalComponent }): ComponentRef<ModalComponent> {
    const factory = this._cfr.resolveComponentFactory(componentType);
    return factory.create(this.modalContainer.parentInjector);
  }


  // tslint:disable-next-line:no-shadowed-variable
  private _createComponentWithData<ModalComponent>(componentType: { new(...args: any[]): ModalComponent }, data: any)
    : ComponentRef<ModalComponent> {
    const component = this._createComponent(componentType);
    Object.assign(component.instance, data);

    return component;
  }

  // tslint:disable-next-line:no-shadowed-variable
  public showModal<ModalComponent>(componentType: { new(...args: any[]): ModalComponent; },
    data: { product: Product, type: string }): Subject<ModalResults> {

    const modal = this._createComponentWithData(componentType, data);
    this.modalContainer.insert(modal.hostView);
    this.state = new Subject<ModalResults>();
    return this.state;
  }
}
