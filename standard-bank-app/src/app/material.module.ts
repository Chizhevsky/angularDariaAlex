import { NgModule } from "@angular/core";
import { MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule
} from "@angular/material";

@NgModule({
  imports: [ MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [ MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule
  ]
})

export class MaterialModule{}
