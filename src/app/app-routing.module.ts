import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MosaicComponent } from './mosaic/mosaic.component';
import { DecoupageComponent } from './decoupage/decoupage.component';
import { ArtComponent } from './art/art.component';
import { FarmComponent } from './farm/farm.component';
import { CricketComponent } from './cricket/cricket.component';
import { ObstacleCourseComponent } from './obstacle-course/obstacle-course.component';

const routes: Routes = [
    { path: 'mosaic', component: MosaicComponent},
    { path: 'decoupage', component: DecoupageComponent},
    { path: 'art', component: ArtComponent},
    { path: 'farm', component: FarmComponent},
    { path: 'cricket', component: CricketComponent},
    { path: 'obstacle', component: ObstacleCourseComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MosaicComponent, DecoupageComponent, ArtComponent,
    FarmComponent, CricketComponent, ObstacleCourseComponent]