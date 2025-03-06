import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RustAwayComponent } from './pages/rust-away/rust-away.component';

export const routes: Routes = [
    {
        path: '/', 
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'projects', 
        component: ProjectsComponent,
        title: 'Projects'
    },
    {
        path: 'contact', 
        component: ContactComponent,
        title: 'Contact'
    },
    {
        path: 'rust-away',
        component: RustAwayComponent,
        title: 'Rust Away'
    },
    {
        path: 'wiz-off',
        component: RustAwayComponent,
        title: 'Wiz Off'
    },
];
