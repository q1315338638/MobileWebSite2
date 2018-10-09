import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThemeService } from '../service/theme.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    m_sRootPage: string = 'TabsPage';
    //m_sRootPage: string = 'HomePage';
    constructor(
        public m_objPlatform: Platform,
        public m_objStatusBar: StatusBar,
        public m_objSplashScreen: SplashScreen,
        public m_objThemeService: ThemeService,
    ) {
		m_objPlatform.ready().then(() => {
			// setTimeout(() => {
			// 	m_objStatusBar.styleDefault();
			// 	m_objSplashScreen.hide();
            // },1000)
            m_objStatusBar.styleDefault();
			m_objSplashScreen.hide();
        });
    }
}
	
