import { Component, OnInit, inject } from '@angular/core';
import { Seoserv } from '../../../core/services/seoserv';
import { SEO_CONTENT } from '../../../core/config/seo-content';
import { Router } from '@angular/router';
import { LanguageSwitcher } from '../../../shared/language-switcher/language-switcher/language-switcher';
import { ChatWidget } from '../../../layout/chat-widget/chat-widget';

@Component({
  selector: 'app-en-course',
  imports: [LanguageSwitcher, ChatWidget],
  templateUrl: './en-course.html',
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
export class EnCourse implements OnInit {
  activeVideo: string | null = null;
  chartChoice: 'breakout' | 'retest' | null = null;

  readonly recordedLessons = [
    {
      number: '01',
      title: 'Exchanges and market participants',
      description: 'How buyers and sellers meet, who places market and limit orders, and how those orders are filled.',
    },
    {
      number: '02',
      title: 'Liquidity, order book, and volume',
      description: 'What orders show in the order book and how price moves when there’s too little liquidity.',
    },
    {
      number: '03',
      title: 'Trade entries on breakouts and retests',
      description: 'How to mark a level and assess what price does when it returns after a breakout.',
    },
    {
      number: '04',
      title: 'Volume signals, entries, and retests',
      description: 'How to tell accumulation from distribution and revise your plan based on how price reacts on a retest.',
    },
    {
      number: '05',
      title: 'Protective stops and trade exits',
      description: 'Where to place a protective stop relative to the level and how volume can help you decide when to exit.',
    },
    {
      number: '06',
      title: 'Chart practice and demo trades',
      description: 'How to check retests across time frames and review entries and exits in practice examples.',
    },
  ];

  constructor(private router: Router) {}
  private seo = inject(Seoserv);

  ngOnInit(): void {
    this.seo.set(SEO_CONTENT.course.en);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  activeFaqIndex: number | null = null;

  readonly faqItems = [
    {
      question: 'Can I start without any trading experience?',
      answer: 'Yes. Start with exchanges, trading platforms, charts, and orders. Then plan your first trade and practice it on a demo account.',
    },
    {
      question: 'How do I access the recorded course?',
      answer: 'After payment, the team sends you the PDF guide and gives your Google account access to the private YouTube lessons.',
    },
    {
      question: 'Does the recorded course follow a schedule?',
      answer: 'You choose when to study and how fast to go. The guide shows you which chapters to read, videos to watch, and exercises to do in order.',
    },
    {
      question: 'Which languages are available?',
      answer: 'The recordings are available in English, Ukrainian, and Russian. The team confirms the language and schedule of live sessions before enrollment.',
    },
    {
      question: 'How does the paid course differ from the free course?',
      answer: 'The free course has 32 sections and public YouTube videos. The recorded course guide links chart walkthroughs to specific clips from the private lessons, exercises, and checkpoints. Group and one-to-one plans include feedback from your mentor.',
    },
    {
      question: 'How does learning with a mentor work?',
      answer: 'The group meets for 10 Zoom sessions on an agreed schedule. One-to-one coaching includes the group program, personal trade reviews with Igor, and a year of support after the course.',
    },
    {
      question: 'What kind of account do I need to practice?',
      answer: 'You practice with virtual funds in a demo account. Use it to place orders, set stops, and keep a trade journal. The group’s practical exam also uses a demo account.',
    },
    {
      question: 'Who can I ask about payment or access?',
      answer: 'Message the team on Telegram at @ArapovTrader. You can ask what’s included, which languages are available, when lessons take place, or how you’ll get access.',
    },
  ];

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.isMenuOpen = false;
  }

}
