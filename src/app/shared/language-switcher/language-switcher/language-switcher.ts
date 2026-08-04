import { Component, ElementRef, HostListener, ViewChild, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

type LangCode = 'ru' | 'en' | 'ua';
 
// Один "смысловой" маршрут — набор его вариантов на каждом языке.
// Чтобы добавить новую переводимую страницу, просто добавь сюда ещё одну строку.
interface PageRouteGroup {
  ru: string;
  en: string;
  ua: string;
}
 
const PAGE_GROUPS: PageRouteGroup[] = [
  { ru: 'ru/course', en: 'en/course-en', ua: 'course-ua' },
  { ru: 'ru/disclaimer-ru', en: 'en/disclaimer-en', ua: 'disclaimer-ua' },
  { ru: 'ru/privacy-policy', en: 'en/privacy-policy-en', ua: 'privacy-policy-ua' },
  { ru: 'ru/public-agreement', en: 'en/public-agreement-en', ua: 'public-agreement-ua' },
];
 
const LANG_LABELS: Record<LangCode, string> = {
  ru: 'RU',
  en: 'EN',
  ua: 'UA',
};
 
const DEFAULT_GROUP = PAGE_GROUPS[0]; // курс — фолбэк, если текущий путь не найден ни в одной группе
 
interface LangOption {
  code: LangCode;
  label: string;
  route: string;
}
@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  // private elementRef = inject(ElementRef);
  // private router = inject(Router);
 
  // @ViewChild('listRef') listRef!: ElementRef<HTMLUListElement>;
 
  // isOpen = signal(false);
  // // Реальная высота списка в px — вместо хрупкого calc(100% * var(--langs)) из оригинала
  // listHeight = signal(0);
 
  // // Отредактируй route под свои реальные пути
  // readonly languages: LangOption[] = [
  //   { code: 'ru', label: 'RU', route: '/ru/course' },
  //   { code: 'en', label: 'EN', route: '/en/course-en' },
  //   { code: 'ua', label: 'UA', route: '/course-ua' },
  // ];
 
  // // Текущий язык определяем по активному URL — не хардкодим
  // get currentLang(): LangOption {
  //   const url = this.router.url;
     

  //   return (
  //     this.languages.find(lang => url.startsWith(lang.route.replace(/\/$/, ''))) ??
  //     this.languages[0]
  //   );
  // }
 
  // toggle(event: MouseEvent): void {
  //   event.stopPropagation();
 
  //   if (!this.isOpen()) {
  //     // Меряем реальную высоту содержимого списка перед раскрытием
  //     this.listHeight.set(this.listRef?.nativeElement?.scrollHeight ?? 0);
  //   }
 
  //   this.isOpen.update(v => !v);
  // }
 
  // select(lang: LangOption): void {
  //   this.isOpen.set(false);
  //   this.router.navigateByUrl(lang.route);
  // }
 
  // // Закрытие по клику снаружи компонента
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent): void {
  //   if (!this.elementRef.nativeElement.contains(event.target)) {
  //     this.isOpen.set(false);
  //   }
  // }
 
  // // Закрытие по Escape — доступность
  // @HostListener('document:keydown.escape')
  // onEscape(): void {
  //   this.isOpen.set(false);
  // }


  private elementRef = inject(ElementRef);
  private router = inject(Router);
 
  @ViewChild('listRef') listRef!: ElementRef<HTMLUListElement>;
 
  isOpen = signal(false);
  listHeight = signal(0);
 
  // Находим группу маршрутов, к которой относится ТЕКУЩИЙ URL —
  // сравниваем без ведущего слэша, чтобы не зависеть от его наличия.
  private get currentGroup(): PageRouteGroup {
    const currentPath = this.router.url.replace(/^\//, '').split(/[?#]/)[0];
 
    const found = PAGE_GROUPS.find(group =>
      (Object.values(group) as string[]).some(route => currentPath.startsWith(route))
    );
 
    return found ?? DEFAULT_GROUP;
  }
 
  // Список языков строится динамически из currentGroup — не хардкодится
  get languages(): LangOption[] {
    const group = this.currentGroup;
    return (Object.keys(group) as LangCode[]).map(code => ({
      code,
      label: LANG_LABELS[code],
      route: '/' + group[code],
    }));
  }
 
  // Текущий язык — определяем по тому, какой из route в currentGroup совпал с URL
  get currentLang(): LangOption {
    const currentPath = this.router.url.replace(/^\//, '').split(/[?#]/)[0];
    const group = this.currentGroup;
 
    const code =
      (Object.keys(group) as LangCode[]).find(c => currentPath.startsWith(group[c])) ?? 'ru';
 
    return { code, label: LANG_LABELS[code], route: '/' + group[code] };
  }
 
  toggle(event: MouseEvent): void {
    event.stopPropagation();
 
    if (!this.isOpen()) {
      this.listHeight.set(this.listRef?.nativeElement?.scrollHeight ?? 0);
    }
 
    this.isOpen.update(v => !v);
  }
 
  select(lang: LangOption): void {
    this.isOpen.set(false);
    this.router.navigateByUrl(lang.route);
  }
 
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
 
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }
}