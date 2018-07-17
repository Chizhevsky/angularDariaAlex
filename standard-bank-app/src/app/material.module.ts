import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
} from "@angular/material";


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule]
})
export class MaterialModule{}
