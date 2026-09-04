import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Seoserv } from '../../../core/services/seoserv';
import { SEO_CONTENT } from '../../../core/config/seo-content';
import { Router, NavigationEnd } from '@angular/router';
 import { LanguageSwitcher } from '../../../shared/language-switcher/language-switcher/language-switcher';
import { ChatWidget } from '../../../layout/chat-widget/chat-widget';
import { NgClass, NgStyle } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";
@Component({
  selector: 'app-ru-course',
  imports: [LanguageSwitcher, ChatWidget],
  templateUrl: './ru-course.html',
  styleUrl: './ru-course.css',
})
export class RuCourse implements OnInit {
  constructor(private router: Router) {}

  private seo = inject(Seoserv);

  ngOnInit(): void {
    this.seo.set(SEO_CONTENT.course.ru);
  }

  navigateTo(path: string) {
    this.router.navigate([path]); 
  }

   // ===== FAQ =====
  activeFaqIndex: number | null = 0;

faqItems = [
  {
    question: 'Подойдет ли курс, если я полный новичок?',
    answer: 'Да, абсолютно. Программа курса построена «с нуля» — от самых основ устройства биржи до построения полноценной торговой системы.'
  },
  {
    question: 'Когда и как я получу доступ к курсу?',
    answer: 'Сразу после успешной оплаты с вами лично свяжется наставник, добавит вас в закрытую группу и согласует график занятий.'
  },
  {
    question: 'В каком формате проходят уроки?',
    answer: 'Все 10 занятий проходят вживую онлайн через Zoom в мини-группах до 6 человек. Это позволяет задавать вопросы и получать максимум внимания.'
  },
  {
    question: 'Как составляется график обучения?',
    answer: 'График составляется индивидуально и согласовывается со всеми участниками группы. Благодаря небольшому количеству учеников, мы можем подобрать максимально удобное для всех время.'
  },
  {
    question: 'Нужен ли мне реальный счет для практики?',
    answer: 'Нет. Вся практическая часть, включая финальный экзамен из 40 сделок, проходит на демо-счете. Это позволяет вам оттачивать навыки без риска для реального капитала.'
  },
  {
    question: 'Что я получу в итоге, кроме знаний?',
    answer: 'Вы получите готовую торговую систему, основанную на чтении объемов, и, что самое главное, — уверенность и практический опыт для самостоятельной работы на рынке.'
  },
  {
    question: 'Могу ли я получить консультацию перед покупкой?',
    answer: 'Да, конечно. Напишите нам в любой удобный мессенджер (ссылки внизу страницы), и наш менеджер организует для вас бесплатную консультацию.'
  },
  {
    question: 'Как с вами связаться для поддержки?',
    answer: 'Вы можете задать любые вопросы напрямую нашему специалисту в Telegram: @ArapovTrader'
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
