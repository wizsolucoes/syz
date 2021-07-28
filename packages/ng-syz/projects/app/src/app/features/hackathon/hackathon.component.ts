import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import * as MarkdownIt from 'markdown-it';

interface SectionLink {
  key: string;
  title: string;
}

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss'],
})
export class HackathonComponent implements OnInit {
  story: SafeHtml;
  md: MarkdownIt;

  formatKey = 'format';
  faqKey = 'faq';
  agendaKey = 'agenda';
  prizesKey = 'prizes';
  overviewKey = 'overview';

  sectionLinks: SectionLink[] = [
    {
      key: this.overviewKey,
      title: 'OVERVIEW',
    },
    {
      key: this.formatKey,
      title: 'REGULAMENTO',
    },
    {
      key: this.agendaKey,
      title: 'AGENDA',
    },
    {
      key: this.prizesKey,
      title: 'PRÊMIOS',
    },
    {
      key: this.faqKey,
      title: 'FAQ',
    },
  ];

  selectedLink = this.overviewKey;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initMarkdownIt();
    this.renderMarkdown(this.selectedLink);
  }

  renderMarkdown(key: string): void {
    this.http
      .get(`/assets/hackathon/2021/md/${key}.md`, { responseType: 'text' })
      ?.subscribe((val: string) => {
        this.story = this.md.render(val);
      });
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }

  private initMarkdownIt(): void {
    this.md = new MarkdownIt({
      html: true,
    });
  }
}
