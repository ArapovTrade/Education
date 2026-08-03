import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Seoserv } from '../../../core/services/seoserv';
import { SEO_CONTENT } from '../../../core/config/seo-content';
import { Router, NavigationEnd } from '@angular/router';
 import { LanguageSwitcher } from '../../../shared/language-switcher/language-switcher/language-switcher';
import { ChatWidget } from '../../../layout/chat-widget/chat-widget';

@Component({
  selector: 'app-en-course',
  imports: [LanguageSwitcher, ChatWidget],
  templateUrl: './en-course.html',
  styleUrl: './en-course.css',
})
export class EnCourse implements OnInit {
  constructor(private router: Router) {}
  private seo = inject(Seoserv);

  ngOnInit(): void {
    this.seo.set(SEO_CONTENT.course.en);
  }

  navigateTo(path: string) {
    this.router.navigate([path]); 
  }

   // ===== FAQ =====
  activeFaqIndex: number | null = 0;

faqItems = [
  {
    question: 'Is the course suitable if I\'m a complete beginner?',
    answer: 'Yes, absolutely. The course program is built "from scratch" — from the very basics of how the exchange works to building a complete trading system.'
  },
  {
    question: 'When and how will I get access to the course?',
    answer: 'Right after successful payment, the mentor will personally contact you, add you to a private group, and arrange the class schedule.'
  },
  {
    question: 'What format are the lessons in?',
    answer: 'All 10 sessions are held live online via Zoom in mini-groups of up to 6 people. This lets you ask questions and get maximum attention.'
  },
  {
    question: 'How is the training schedule set?',
    answer: 'The schedule is arranged individually and agreed with all group participants. Thanks to the small number of students, we can find a time that works well for everyone.'
  },
  {
    question: 'Do I need a real account to practice?',
    answer: 'No. The entire practical part, including the final exam of 40 trades, takes place on a demo account. This lets you sharpen your skills without risking real capital.'
  },
  {
    question: 'What will I get in the end, besides knowledge?',
    answer: 'You\'ll get a ready trading system based on reading volume, and — most importantly — confidence and practical experience to work independently in the market.'
  },
  {
    question: 'Can I get a consultation before purchasing?',
    answer: 'Yes, of course. Message us on any messenger you prefer (links at the bottom of the page), and our manager will arrange a free consultation for you.'
  },
  {
    question: 'How can I contact you for support?',
    answer: 'You can ask any questions directly to our specialist on Telegram: @ArapovTrader'
  }
];

toggleFaq(index: number): void {
  this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
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
