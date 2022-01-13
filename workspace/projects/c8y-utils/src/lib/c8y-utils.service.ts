import { Injectable } from '@angular/core';
import { IManagedObject, IResultList } from '@c8y/client';
import { InventoryService } from '@c8y/ngx-components/api';

@Injectable({
  providedIn: 'root',
})
export class C8yUtilsService {
  constructor(private inventory: InventoryService) {}

  list(filter: object): Promise<IResultList<IManagedObject>> {
    return this.inventory.list(filter);
  }
}
