import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IntroComponent } from "./components/wrapper/components/intro/intro.component";
import { NumberChooseComponent } from "./components/wrapper/components/numberchoose/numberchoose.component";
import { DetailsComponent } from "./components/wrapper/components/details/details.component";
import { EntryConfirmationComponent } from "./components/wrapper/components/entryconfirmation/entryconfirmation.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
        { path: "", redirectTo: "intro", pathMatch: "full" },
        { path: "intro", component: IntroComponent },
        { path: "number", component: NumberChooseComponent },
        { path: "details", component: DetailsComponent },
        { path: "entryconfirmed", component: EntryConfirmationComponent }
      ],
      { useHash: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
