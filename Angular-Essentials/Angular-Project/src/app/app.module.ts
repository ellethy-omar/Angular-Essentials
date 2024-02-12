import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToBeImportedComponent } from "../to-be-imported/to-be-imported.component";
import { DatabindingTestComponent } from "./databinding-test/databinding-test.component";
import { FormsModule } from "@angular/forms";

@NgModule(
{
    imports: [
        FormsModule,
        ToBeImportedComponent,
        DatabindingTestComponent,
        BrowserModule,
    ],
    declarations: [],
}
)

export class AppModule  {   }