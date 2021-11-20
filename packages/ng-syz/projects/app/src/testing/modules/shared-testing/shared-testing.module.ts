import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'projects/app/src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientTestingModule,
    NoopAnimationsModule,
    SharedModule,
    RouterTestingModule,
  ],
  exports: [
    HttpClientTestingModule,
    NoopAnimationsModule,
    SharedModule,
    RouterTestingModule,
  ],
})
export class SharedTestingModule {}
