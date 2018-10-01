import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routes";
import { GlobalEvents } from "./helpers/globalevents";

import { AppComponent } from "./app.component";
import { TopHeaderComponent } from "./components/topheader/topheader.component";
import { IntroComponent } from "./components/wrapper/components/intro/intro.component";
import { NumberChooseComponent } from "./components/wrapper/components/numberchoose/numberchoose.component";
import { DetailsComponent } from "./components/wrapper/components/details/details.component";
import { EntryConfirmationComponent } from "./components/wrapper/components/entryconfirmation/entryconfirmation.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    IntroComponent,
    NumberChooseComponent,
    DetailsComponent,
    FooterComponent,
    EntryConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [GlobalEvents],
  bootstrap: [AppComponent]
})
export class AppModule {}
