import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CellComponent } from './cell/cell.component';
import { CoreService } from './shared/service/core.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MatrixComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
