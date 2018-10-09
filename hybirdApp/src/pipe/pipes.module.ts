import { NgModule } from '@angular/core';
//import { ThemePipe } from './theme.pipe';
import { I18NPipe } from './I18NPipe';

@NgModule({
    declarations: [
        //ThemePipe,
        I18NPipe
    ],
    imports: [

    ],
    exports: [
        //ThemePipe
        I18NPipe
    ]
})
export class PipesModule { }
