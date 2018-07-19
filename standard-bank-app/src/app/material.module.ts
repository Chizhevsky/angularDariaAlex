import {NgModule} from "@angular/core";
import {MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule

} from "@angular/material";


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule,MatMenuModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatInputModule, MatMenuModule, MatIconModule]
})
export class MaterialModule{}
