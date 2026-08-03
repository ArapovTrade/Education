import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Seoserv } from '../../../core/services/seoserv';
import { SEO_CONTENT } from '../../../core/config/seo-content';
import { Router, NavigationEnd } from '@angular/router';
 import { LanguageSwitcher } from '../../../shared/language-switcher/language-switcher/language-switcher';
import { ChatWidget } from '../../../layout/chat-widget/chat-widget';

@Component({
  selector: 'app-uk-course',
  imports: [LanguageSwitcher, ChatWidget],
  templateUrl: './uk-course.html',
  styleUrl: './uk-course.css',
})
export class UkCourse implements OnInit {
  constructor(private router: Router) {}

  private seo = inject(Seoserv);

  ngOnInit(): void {
    this.seo.set(SEO_CONTENT.course.ua);
  }

  navigateTo(path: string) {
    this.router.navigate([path]); 
  }

   // ===== FAQ =====
  activeFaqIndex: number | null = 0;

faqItems = [
  {
    question: 'Чи підійде курс, якщо я повний новачок?',
    answer: 'Так, абсолютно. Програма курсу побудована «з нуля» — від найпростіших основ устрою біржі до побудови повноцінної торгової системи.'
  },
  {
    question: 'Коли і як я отримаю доступ до курсу?',
    answer: 'Одразу після успішної оплати з вами особисто зв\'яжеться наставник, додасть вас у закриту групу та узгодить графік занять.'
  },
  {
    question: 'У якому форматі проходять уроки?',
    answer: 'Усі 10 занять проходять наживо онлайн через Zoom у міні-групах до 6 осіб. Це дозволяє ставити запитання та отримувати максимум уваги.'
  },
  {
    question: 'Як складається графік навчання?',
    answer: 'Графік складається індивідуально та узгоджується з усіма учасниками групи. Завдяки невеликій кількості учнів ми можемо підібрати максимально зручний для всіх час.'
  },
  {
    question: 'Чи потрібен мені реальний рахунок для практики?',
    answer: 'Ні. Уся практична частина, включно з фінальним іспитом із 40 угод, проходить на демо-рахунку. Це дозволяє відточувати навички без ризику для реального капіталу.'
  },
  {
    question: 'Що я отримаю в підсумку, крім знань?',
    answer: 'Ви отримаєте готову торгову систему, засновану на читанні обсягів, і, що найголовніше, — впевненість і практичний досвід для самостійної роботи на ринку.'
  },
  {
    question: 'Чи можу я отримати консультацію перед покупкою?',
    answer: 'Так, звісно. Напишіть нам у будь-який зручний месенджер (посилання внизу сторінки), і наш менеджер організує для вас безкоштовну консультацію.'
  },
  {
    question: 'Як зв\'язатися з вами для підтримки?',
    answer: 'Ви можете поставити будь-які запитання напряму нашому спеціалісту в Telegram: @ArapovTrader'
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
