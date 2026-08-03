import { Component, ElementRef, HostListener, ViewChild, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

interface LangOption {
  code: 'ru' | 'en' | 'ua';
  label: string;
  route: string; // куда вести при выборе языка
}
@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  private elementRef = inject(ElementRef);
  private router = inject(Router);
 
  @ViewChild('listRef') listRef!: ElementRef<HTMLUListElement>;
 
  isOpen = signal(false);
  // Реальная высота списка в px — вместо хрупкого calc(100% * var(--langs)) из оригинала
  listHeight = signal(0);
 
  // Отредактируй route под свои реальные пути
  readonly languages: LangOption[] = [
    { code: 'ru', label: 'RU', route: '/ru/course' },
    { code: 'en', label: 'EN', route: '/en/course-en' },
    { code: 'ua', label: 'UA', route: '/course-ua' },
  ];
 
  // Текущий язык определяем по активному URL — не хардкодим
  get currentLang(): LangOption {
    const url = this.router.url;
    return (
      this.languages.find(lang => url.startsWith(lang.route.replace(/\/$/, ''))) ??
      this.languages[0]
    );
  }
 
  toggle(event: MouseEvent): void {
    event.stopPropagation();
 
    if (!this.isOpen()) {
      // Меряем реальную высоту содержимого списка перед раскрытием
      this.listHeight.set(this.listRef?.nativeElement?.scrollHeight ?? 0);
    }
 
    this.isOpen.update(v => !v);
  }
 
  select(lang: LangOption): void {
    this.isOpen.set(false);
    this.router.navigateByUrl(lang.route);
  }
 
  // Закрытие по клику снаружи компонента
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
 
  // Закрытие по Escape — доступность
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isOpen.set(false);
  }
}