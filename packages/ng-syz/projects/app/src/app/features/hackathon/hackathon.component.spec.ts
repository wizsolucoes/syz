import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HackathonComponent } from './hackathon.component';

describe('HackathonComponent', () => {
  let component: HackathonComponent;
  let fixture: ComponentFixture<HackathonComponent>;
  let mockHttp: jasmine.SpyObj<HttpClient>;
  let template: HTMLElement;

  beforeEach(async () => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
      declarations: [HackathonComponent],
      providers: [{ provide: HttpClient, useValue: mockHttp }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate MarkDownIt', () => {
    expect(component.md).toBeTruthy();
  });

  it('shoud attempt to render selected section', () => {
    // Given
    spyOn(component, 'renderMarkdown');

    // When
    component.ngOnInit();

    // Then
    expect(component.renderMarkdown).toHaveBeenCalledWith(
      component.selectedLink
    );
  });

  describe('#selectedLink', () => {
    it('should be overivew', () => {
      expect(component.selectedLink).toEqual(component.overviewKey);
    });
  });

  describe('#renderMarkdown', () => {
    it('should get markdown with http', () => {
      // Given
      const key = 'prizes';

      // When
      component.renderMarkdown(key);

      // Then
      expect(mockHttp.get).toHaveBeenCalledWith(
        `/assets/hackathon/2021/md/${key}.md`,
        jasmine.objectContaining({ responseType: 'text' })
      );
    });

    it('should call MarkDownIt.render with markdown obtained from http', () => {
      // Given
      const markdown = '# Title';
      mockHttp.get.and.returnValue(of(markdown));
      spyOn(component.md, 'render');

      // When
      component.renderMarkdown('any');

      // Given
      expect(component.md.render).toHaveBeenCalledWith(markdown);
    });

    it('shoud set story as value returned from MarkDownIt.render', () => {
      // Given
      const rendered = '<h1>Title</h1>';
      mockHttp.get.and.returnValue(of('# Title'));
      spyOn(component.md, 'render').and.returnValue(rendered);

      // When
      component.renderMarkdown('any');

      // Given
      expect(component.story).toEqual(rendered);
    });
  });

  describe('ui tests', () => {
    it('should render a link for each section', () => {
      expect(
        template.querySelectorAll('[data-test="section-link"]').length
      ).toEqual(component.sectionLinks.length);
    });

    describe('when a section link is clicked', () => {
      beforeEach(() => {
        // Given
        const link = template.querySelectorAll(
          '[data-test="section-link"]'
        )[0] as HTMLButtonElement;

        spyOn(component, 'scroll');
        spyOn(component, 'renderMarkdown');

        // When
        link.click();
      });

      it('should call scroll', () => {
        expect(component.scroll).toHaveBeenCalled();
      });

      it('should call renderMarkdown', () => {
        expect(component.renderMarkdown).toHaveBeenCalledWith(
          component.selectedLink
        );
      });
    });
  });
});
