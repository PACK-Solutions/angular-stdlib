import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DateHttpInterceptor } from './date-http-interceptor';

describe('DateHttpInterceptor', () => {

  let http: HttpClient;
  let mock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: DateHttpInterceptor,
        multi: true
      }]
    });
    http = TestBed.get(HttpClient);
    mock = TestBed.get(HttpTestingController);
  });

  it('should create an instance', () => {
    expect(new DateHttpInterceptor()).toBeTruthy();
  });

  it('should intercept http request with a null body', () => {
    http.get<any>('/api').subscribe(
      response => expect(response).toBeNull(),
      fail
    );
    verify(mock, null);
  });

  it('should intercept http request without an object body', () => {
    http.get<any>('/api').subscribe(
      response => expect(response).toBe(123),
      fail
    );
    verify(mock, 123);
  });

  it('should intercept http request with a null date', () => {
    http.get<any>('/api').subscribe(
      response => expect(response.date).toBeNull(),
      fail
    );
    verify(mock, { date: null });
  });

  it('should intercept http request with a complex object containing dates', () => {
    http.get<any>('/api').subscribe(
      response => {
        expect(response.firstname).toEqual('Julien');
        expect(response.firstDate).toEqual(new Date('2018-05-15'));
        expect(response.multiDates[0]).toEqual(new Date('2019-09-24'));
        expect(response.multiDates[1]).toEqual(new Date('2017-10-05'));
        expect(response.child.firstname).toEqual('Guillaume');
        expect(response.child.firstDate).toEqual(new Date('2019-02-15'));
        expect(response.child.grandchildren[0].firstname).toEqual('Olivier');
        expect(response.child.grandchildren[0].birthDate).toEqual(new Date('2019-02-18'));
        expect(response.child.grandchildren[0].anotherField).toEqual('BigBoss');
        expect(response.child.grandchildren[1].firstname).toEqual('Mehdi');
        expect(response.child.grandchildren[1].birthDate).toEqual(new Date('1915-01-23'));
        expect(response.child.grandchildren[1].anotherField).toEqual('WhatThe?');
      },
      fail
    );
    verify(mock, {
      firstname: 'Julien',
      firstDate: '2018-05-15',
      multiDates: ['2019-09-24', '2017-10-05'],
      child: {
        firstname: 'Guillaume',
        firstDate: '2019-02-15',
        grandchildren: [{
          firstname: 'Olivier',
          birthDate: '2019-02-18',
          anotherField: 'BigBoss'
        }, {
          firstname: 'Mehdi',
          birthDate: '1915-01-23',
          anotherField: 'WhatThe?'
        }]
      }
    });
  });

  it('should intercept http request with a body containing a date "yyyy-MM-dd"', () => {
    verifyDate(http, mock, '2018-05-15');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss+00:00"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10+05:00');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss-01:00"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10-05:00');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ssZ"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10Z');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss.sss"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10.524');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss.sss+00:00"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10.524+05:00');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss.sss-01:00"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10.524-05:00');
  });

  it('should intercept http request with a body containing a datetime "yyyy-MM-ddThh:mm:ss.sssZ"', () => {
    verifyDate(http, mock, '2018-05-15T15:12:10.524Z');
  });

});

function verify(mock: HttpTestingController, body: any) {
  const request = mock.expectOne(req => req.method === 'GET' && req.url === '/api');
  request.flush(body);
  mock.verify();
}

function verifyDate(http: HttpClient, mock: HttpTestingController, dateAsString: string) {
  http.get<any>('/api').subscribe(
    response => expect(response.date).toEqual(new Date(dateAsString)),
    fail
  );
  verify(mock, { date: dateAsString });
}
