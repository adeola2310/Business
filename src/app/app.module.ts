import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent} from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SanitizeHtmlPipe } from './shared/pipes/sanitize-html.pipe';
import { CoreModule } from './shared/modules/core.module';
import { OwlModule } from 'ngx-owl-carousel';
import { SliderComponent } from './shared/components/slider/slider.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SanitizeHtmlPipe,
    SliderComponent


  ],
  imports: [
    BrowserModule,
    OwlModule,
    CoreModule.forRoot()
  ],
  providers: [SanitizeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
