import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MosaicComponent } from './mosaic/mosaic.component';
import { DecoupageComponent } from './decoupage/decoupage.component';
import { ArtComponent } from './art/art.component';
import { FarmComponent } from './farm/farm.component';
import { CricketComponent } from './cricket/cricket.component';
import { ObstacleCourseComponent } from './obstacle-course/obstacle-course.component';
import { BodyComponent } from './body/body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
    { path: 'mosaic', component: MosaicComponent},
    { path: 'decoupage', component: DecoupageComponent},
    { path: 'art', component: ArtComponent},
    { path: 'farm', component: FarmComponent},
    { path: 'cricket', component: CricketComponent},
    { path: 'obstacle', component: ObstacleCourseComponent},
    { path: 'home', component: BodyComponent},
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'booking', component: BookComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MosaicComponent, DecoupageComponent, ArtComponent,
    FarmComponent, CricketComponent, ObstacleCourseComponent, BodyComponent, AboutUsComponent,
    ContactUsComponent, BookComponent]