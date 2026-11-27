import { afterNextRender, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SEO_CONTENT } from '../../../core/config/seo-content';
import { Seoserv } from '../../../core/services/seoserv';
import { ChatWidget } from '../../../layout/chat-widget/chat-widget';
import { LanguageSwitcher } from '../../../shared/language-switcher/language-switcher/language-switcher';

@Component({
  selector: 'app-uk-course',
  imports: [LanguageSwitcher, ChatWidget],
  templateUrl: './uk-course.html',
  styleUrls: [
    '../ru-course/ru-course.css',
    '../course-base.css',
    '../course-content.css',
    '../course-pricing.css',
    '../course-shell.css',
    '../ru-course/ru-course-learning.css',
    '../ru-course/ru-course-plans.css',
    '../ru-course/ru-course-closing.css',
  ],
})
export class UkCourse implements OnInit {
  private readonly seo = inject(Seoserv);

  activeVideo: string | null = null;
  chartChoice: 'breakout' | 'retest' | null = null;
  activeFaqIndex: number | null = null;
  isMenuOpen = false;

  readonly recordedLessons = [
    {
      number: '01',
      title: 'Біржа та учасники ринку',
      description: 'Як зустрічаються покупці й продавці, хто подає ринкові та лімітні заявки і як вони виконуються.',
    },
    {
      number: '02',
      title: 'Ліквідність, біржовий стакан і обсяг',
      description: 'Що показують заявки в стакані та як змінюється ціна, коли на ринку бракує ліквідності.',
    },
    {
      number: '03',
      title: 'Точка входу: пробій і ретест',
      description: 'Як позначити рівень та оцінити реакцію ціни, коли вона повертається після пробою.',
    },
    {
      number: '04',
      title: 'Сигнали обсягу, входи й ретести',
      description: 'Як розрізняти накопичення й розподіл та переглядати сценарій за реакцією ціни під час ретесту.',
    },
    {
      number: '05',
      title: 'Захисний стоп і вихід з угоди',
      description: 'Де ставити захисний стоп відносно рівня і як обсяг допомагає вибрати момент виходу.',
    },
    {
      number: '06',
      title: 'Практика на графіках і деморахунку',
      description: 'Як перевіряти ретести на різних таймфреймах і розбирати входи та виходи на навчальних прикладах.',
    },
  ];

  readonly faqItems = [
    {
      question: 'Чи підійде мені курс, якщо я починаю з нуля?',
      answer:
        'Так. Спочатку ви познайомитеся з біржею, терміналом, графіком і заявками. Потім складете план першої угоди й відпрацюєте його на деморахунку.',
    },
    {
      question: 'Як я отримаю доступ до курсу в записі?',
      answer:
        'Після оплати команда надішле PDF-посібник і відкриє доступ до закритих відео на YouTube для вашого облікового запису Google.',
    },
    {
      question: 'Чи є розклад у самостійного курсу?',
      answer:
        'Ви самі обираєте темп і час занять. У посібнику зазначено, в якому порядку читати розділи, дивитися відео й виконувати завдання.',
    },
    {
      question: 'Якою мовою можна навчатися?',
      answer:
        'Записи доступні українською, англійською та російською. Мову й розклад живих занять команда підтвердить перед записом.',
    },
    {
      question: 'Чим платний курс відрізняється від відкритого?',
      answer:
        'Відкритий курс на сайті містить 32 розділи. Його доповнюють відкриті відео на YouTube. У курсі в записі посібник поєднує розбори графіків з потрібними фрагментами закритих відеоуроків, завданнями й контрольними точками. У групі та індивідуально ви отримуєте зворотний зв’язок наставника.',
    },
    {
      question: 'Як проходить навчання з наставником?',
      answer:
        'Група проходить 10 занять у Zoom за погодженим розкладом. Індивідуальний формат охоплює групову програму, особисті розбори ваших угод з Ігорем і рік супроводу після курсу.',
    },
    {
      question: 'Який рахунок потрібен для практики?',
      answer:
        'Навчальні угоди відбуваються на деморахунку з віртуальними коштами. На ньому ви відпрацюєте подання заявок, встановлення стопів і ведення журналу. Практичний іспит у групі теж проходить на деморахунку.',
    },
    {
      question: 'Куди звернутися перед оплатою або з питанням про доступ?',
      answer:
        'Напишіть команді в Telegram @ArapovTrader. Там можна уточнити наповнення курсу, мову занять, розклад і порядок отримання доступу.',
    },
  ];

  constructor(private readonly router: Router) {
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

      // Fonts can change the height of sections after the browser first scrolls to a fragment.
      if (document.readyState === 'complete') {
        void alignSection();
      } else {
        window.addEventListener('load', alignSection, { once: true });
      }
    });
  }

  ngOnInit(): void {
    this.seo.set(SEO_CONTENT.course.ua);
  }

  navigateTo(path: string): void {
    void this.router.navigate([path]);
  }

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.isMenuOpen = false;
  }
}
