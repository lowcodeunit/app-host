import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { AppHostSEOState } from './../state/app-host.state';

@Injectable({
  providedIn: 'root',
})
export class SEOServiceService {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected titleSvc: Title, protected metaSvc: Meta) {}

  //  API Methods
  public SetSEO(seo: AppHostSEOState) {
    console.log('Updating SEO to:');
    console.log(seo);
    debugger;
    this.setTitle(seo.Title);

    //  TODO: Add support for Open Graph and twitter cards meta tags

    this.setMetaTags(seo.MetaTags);
  }

  //  Helpers
  protected setMetaTags(metas: { [tag: string]: string }) {
    const metaTags = Object.keys(metas || {}).map((tag) => {
      return {
        name: tag,
        content: metas[tag],
      };
    });

    this.metaSvc.addTags(metaTags || []);
  }

  protected setTitle(title: string) {
    this.titleSvc.setTitle(title);
  }
}
