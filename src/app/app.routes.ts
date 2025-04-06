import { Routes } from '@angular/router';
import { SimComponent } from './components/sim/sim.component';
import { canActivateAuthRole } from './guards/auth.guard';
import { ForbiddenComponentComponent } from './components/forbidden-component/forbidden-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';


export const routes: Routes = [
    {path:"", component:SimComponent},
    { path: 'forbidden', component: ForbiddenComponentComponent },
    { path: '**', component: NotFoundComponentComponent }
];
