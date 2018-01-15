import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';

import { ReadParentComponent} from './read-parent/read-parent.Component';
import { PageHeaderModule } from './../../shared';
@NgModule({
    imports: [CommonModule,
              ParentRoutingModule,
              TranslateModule,
              PageHeaderModule
            ],
     declarations: [ParentComponent, ReadParentComponent]
})
export class ParentModule {}
