import { Routes } from '@angular/router';
// Courses
import { RuCourse } from './features/couses/ru-course/ru-course';
import { EnCourse } from './features/couses/en-course/en-course';
import { UkCourse } from './features/couses/uk-course/uk-course';
//Disclaimers
import { DisclaimerRu } from './features/documents/disclaimers/disclaimer-ru/disclaimer-ru';
import { DisclaimerUk } from './features/documents/disclaimers/disclaimer-uk/disclaimer-uk';
import { DisclaimerEn } from './features/documents/disclaimers/disclaimer-en/disclaimer-en';
//PrivacyPolicies
import { PrivacyPolicyEn } from './features/documents/privacyPolicies/privacy-policy-en/privacy-policy-en';
import { PrivacyPolicyRu } from './features/documents/privacyPolicies/privacy-policy-ru/privacy-policy-ru';
import { PrivacyPolicyUk } from './features/documents/privacyPolicies/privacy-policy-uk/privacy-policy-uk';
//Public Agreements
import { PublicAgrimentEn } from './features/documents/publicAgriments/public-agriment-en/public-agriment-en';
import { PublicAgrimentUk } from './features/documents/publicAgriments/public-agriment-uk/public-agriment-uk';
import { PublicAgrimentRu } from './features/documents/publicAgriments/public-agriment-ru/public-agriment-ru';

export const routes: Routes = [

  { path: 'ru/course', component: RuCourse },
  { path: 'en/course-en', component: EnCourse },
  { path: 'course-ua', component: UkCourse },

  { path: 'ru/disclaimer-ru', component: DisclaimerRu },
  { path: 'disclaimer-ua', component: DisclaimerUk },
  { path: 'en/disclaimer-en', component: DisclaimerEn },

  { path: 'ru/privacy-policy', component: PrivacyPolicyRu },
  { path: 'en/privacy-policy-en', component: PrivacyPolicyEn },
  { path: 'privacy-policy-ua', component: PrivacyPolicyUk },

  { path: 'ru/public-agreement', component: PublicAgrimentRu },
  { path: 'en/public-agreement-en', component: PublicAgrimentEn },
  { path: 'public-agreement-ua', component: PublicAgrimentUk },
  
  { path: '', redirectTo: 'ru/course', pathMatch: 'full' },

   
];
