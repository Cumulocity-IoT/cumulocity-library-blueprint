import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CoreModule,
  gettext,
  HOOK_NAVIGATOR_NODES,
  HOOK_ROUTE,
  NavigatorNode,
} from '@c8y/ngx-components';
import { C8yUtilsTestComponent } from './c8y-utils-test.component';

const routes: Routes = [
  {
    path: 'c8y-utils',
    component: C8yUtilsTestComponent,
    pathMatch: 'full',
  },
];

const nodes: NavigatorNode[] = [
  new NavigatorNode({
    label: gettext('Data Grid Demo'),
    path: '/c8y-utils',
    icon: 'decentralized-network',
    priority: 100,
  }),
];

@NgModule({
  imports: [CoreModule, RouterModule],
  exports: [],
  declarations: [C8yUtilsTestComponent],
  entryComponents: [C8yUtilsTestComponent],
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: { get: () => nodes },
      multi: true,
    },
    {
      provide: HOOK_ROUTE,
      useValue: routes,
      multi: true,
    },
  ],
})
export class C8yUtilsDemoModule {}
