import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
} from "@angular/material";


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule,MatMenuModule],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule, MatMenuModule]
})
export class MaterialModule{}
