import { afterNextRender, Component, HostListener, OnInit, inject } from '@angular/core';
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
  styleUrls: [
    './ru-course.css',
    '../course-base.css',
    '../course-content.css',
    '../course-pricing.css',
    '../course-shell.css',
    './ru-course-learning.css',
    './ru-course-plans.css',
    './ru-course-closing.css',
  ],
})
export class RuCourse implements OnInit {
  activeVideo: string | null = null;
  chartChoice: 'breakout' | 'retest' | null = null;

  readonly recordedLessons = [
    {
      number: '01',
      title: 'Биржа и участники рынка',
      description: 'Как встречаются покупатели и продавцы, кто подаёт рыночные и лимитные заявки и как они исполняются.',
    },
    {
      number: '02',
      title: 'Ликвидность, стакан и объём',
      description: 'Что показывают заявки в стакане и как меняется цена, когда доступной ликвидности не хватает.',
    },
    {
      number: '03',
      title: 'Точка входа: пробой и ретест',
      description: 'Как отметить уровень и оценить реакцию цены при возврате после пробоя.',
    },
    {
      number: '04',
      title: 'Сигналы объёма, входы и ретесты',
      description: 'Как различать накопление и распределение и пересматривать сценарий по реакции цены на ретесте.',
    },
    {
      number: '05',
      title: 'Защитный стоп и выход из сделки',
      description: 'Где ставить защитный стоп относительно уровня и как объём помогает выбрать момент выхода.',
    },
    {
      number: '06',
      title: 'Практика на графиках и демосчёте',
      description: 'Как проверять ретесты на разных таймфреймах и разбирать входы и выходы на учебных примерах.',
    },
  ];

  constructor(private router: Router) {
    afterNextRender(() => {
      const hash = window.location.hash;
      if (hash !== '#join' && hash !== '#author' && hash !== '#faq') return;

      const alignSection = async () => {
        await document.fonts.ready;
        if (window.location.hash !== hash) return;

        const section = document.getElementById(hash.slice(1));
        const heading = section?.querySelector('h2');
        if (!section || !heading) return;

        const { top, bottom } = heading.getBoundingClientRect();
        if (window.scrollY === 0 || (bottom > 0 && top < window.innerHeight)) {
          section.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      };

      // The initial fragment scroll can happen before the fonts change the sections above it.
      if (document.readyState === 'complete') {
        void alignSection();
      } else {
        window.addEventListener('load', alignSection, { once: true });
      }
    });
  }

  private seo = inject(Seoserv);

  ngOnInit(): void {
    this.seo.set(SEO_CONTENT.course.ru);
  }

  navigateTo(path: string) {
    this.router.navigate([path]); 
  }

   // ===== FAQ =====
  activeFaqIndex: number | null = null;

  faqItems = [
    {
      question: 'Подойдёт ли мне курс, если я начинаю с нуля?',
      answer:
        'Да. Начнёте с устройства биржи, терминала, графика и заявок. Затем составите план первой сделки и отработаете его на демосчёте.',
    },
    {
      question: 'Как я получу доступ к курсу в записи?',
      answer:
        'После оплаты команда пришлёт PDF-методичку и откроет доступ к закрытым видео на YouTube для вашего аккаунта Google.',
    },
    {
      question: 'Есть ли расписание у самостоятельного курса?',
      answer:
        'Вы сами выбираете темп и время занятий. Методичка подскажет, в каком порядке читать главы, смотреть видео и выполнять задания.',
    },
    {
      question: 'На каком языке можно учиться?',
      answer:
        'Записи доступны на русском, украинском и английском. Язык и расписание живых занятий команда подтвердит перед записью.',
    },
    {
      question: 'Чем платный курс отличается от открытого?',
      answer:
        'На сайте доступен открытый курс из 32 разделов, который дополняют открытые видео YouTube. В курсе в записи методичка связывает разборы графиков с нужными фрагментами закрытых уроков, заданиями и контрольными точками. В группе и индивидуально вы получаете обратную связь наставника.',
    },
    {
      question: 'Как проходит обучение с наставником?',
      answer:
        'Группа проходит 10 занятий в Zoom по согласованному расписанию. Индивидуальный формат включает программу группы, личные разборы ваших сделок с Игорем и год сопровождения после курса.',
    },
    {
      question: 'Какой счёт нужен для практики?',
      answer:
        'Учебные сделки проходят на демосчёте с виртуальными средствами. На нём вы отработаете подачу заявок, установку стопов и ведение журнала. Практический экзамен в группе также проходит на демосчёте.',
    },
    {
      question: 'Куда обратиться перед оплатой или с вопросом о доступе?',
      answer:
        'Напишите команде в Telegram @ArapovTrader. Там можно уточнить состав курса, язык занятий, расписание и порядок получения доступа.',
    },
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
