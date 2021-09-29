import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramComponent } from './anagram/anagram.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TempTrackerComponent } from './temp-tracker/temp-tracker.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'temp-track', component: TempTrackerComponent },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
