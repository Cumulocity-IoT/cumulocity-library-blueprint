import { Component, OnInit } from '@angular/core';
import { AppStateService } from '@c8y/ngx-components';
// TODO: fix path resolving in tsconfig
import { C8yUtilsService } from 'dist/c8y-utils';
import { filter } from 'rxjs/operators';

@Component({
  template: `<c8y-title>Demo to test the lib</c8y-title>
    <pre><code>{{json}}</code></pre>`,
})
export class C8yUtilsTestComponent implements OnInit {
  json = '';

  constructor(private state: AppStateService, private utils: C8yUtilsService) {}

  ngOnInit(): void {
    this.state.currentUser.pipe(filter((user) => !!user)).subscribe((user) => {
      this.utils
        .list({ pageSize: 1000 })
        .then(
          (result) => (this.json = JSON.stringify(result.data, null, '  '))
        );
    });
  }
}
