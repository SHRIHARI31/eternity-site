import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  private readonly baseUrl = 'https://shrihari31.github.io/eternity-site';

  updateSeo(title: string, description: string, keywords: string = '') {
    this.titleService.setTitle(title);
    
    this.metaService.updateTag({ name: 'description', content: description });
    
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });

    this.updateCanonicalUrl();
  }

  private updateCanonicalUrl() {
    let element: HTMLLinkElement | null = this.document.querySelector(`link[rel='canonical']`);
    
    if (!element) {
      element = this.document.createElement('link');
      element.setAttribute('rel', 'canonical');
      this.document.head.appendChild(element);
    }
    
    if (isPlatformBrowser(this.platformId)) {
      element.setAttribute('href', window.location.origin + window.location.pathname);
    } else {
      // For SSR, we can't use window, so we construction it or leave it
      // In many cases, it's better to just leave it for hydration to fix
      // or use a base URL if known.
      element.setAttribute('href', this.baseUrl + (this.document.location.pathname || ''));
    }
  }
}
