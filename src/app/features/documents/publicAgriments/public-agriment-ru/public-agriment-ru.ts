import { Component, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { Seoserv } from '../../../../core/services/seoserv';
import { SEO_CONTENT } from '../../../../core/config/seo-content';
import { Router, NavigationEnd } from '@angular/router';
 import { LanguageSwitcher } from '../../../../shared/language-switcher/language-switcher/language-switcher';

@Component({
  selector: 'app-public-agriment-ru',
  imports: [LanguageSwitcher],
  templateUrl: './public-agriment-ru.html',
  styleUrl: './public-agriment-ru.css',
})
export class PublicAgrimentRu implements OnInit {
constructor(private router: Router) {}
  
  private seo = inject(Seoserv);
  

  
  ngOnInit(): void {
     



    this.seo.set(SEO_CONTENT.agreement.ru);
  }

  navigateTo(path: string) {
    this.router.navigate([path]); 
  }
 // ===== Language dropdown =====
  isLangOpen = false;

  toggleLang(event: Event): void {
    event.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
  }

  @HostListener('document:click')
  closeLang(): void {
    this.isLangOpen = false;
  }

  // ===== Burger menu =====
  isMenuOpen = false;

   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollTo(event: Event, id: string) {
    event.preventDefault(); // ← самое важное, чтобы не было перезагрузки

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Закрываем мобильное меню после клика
    this.isMenuOpen = false;
  }

}
