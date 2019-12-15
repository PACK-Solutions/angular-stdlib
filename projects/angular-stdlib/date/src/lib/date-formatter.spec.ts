import { DateFormatter } from './date-formatter';

describe('DateFormatter', () => {

  it('should create an instance', () => {
    expect(new DateFormatter()).toBeTruthy();
  });

  it('should has ISO_DATE formatter', () => {
    expect(DateFormatter.ISO_DATE).toBe('yyyy-MM-dd');
  });

  it('should transform null date to fake serialized one', () => {
    expect(DateFormatter.toFakeSerializedDate(null)).toBeNull();
  });

  it('should transform timeless date to fake serialized one', () => {
    const fakeSerializedDate = DateFormatter.toFakeSerializedDate(new Date('2019-03-24T00:00:00'));
    expect(fakeSerializedDate.toJSON()).toEqual('2019-03-24T00:00:00.000Z');
  });

  it('should transform midday date to fake serialized one', () => {
    const fakeSerializedDate = DateFormatter.toFakeSerializedDate(new Date('2019-03-24T12:00:00'));
    expect(fakeSerializedDate.toJSON()).toEqual('2019-03-24T12:00:00.000Z');
  });

});
