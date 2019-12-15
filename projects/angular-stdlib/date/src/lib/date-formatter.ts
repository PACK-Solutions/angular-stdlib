export class DateFormatter {

  static readonly ISO_DATE = 'yyyy-MM-dd';

  /**
   * Transform the date in the same way as it is serialized :
   * Serialization use JSON.stringify method which use the Date toJSON() method that transform date to UTC Z.
   * Only use when you have to serialize dates and you don't want than serialization apply zero UTC offset transformation.
   *
   * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify
   * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toJSON
   * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toISOString
   *
   * @param date Date to transform
   */
  public static toFakeSerializedDate(date: Date): Date {
    if (date === null || date === undefined) {
      return date;
    }
    const hourAsMinutes = 60;
    const timezoneOffset = date.getTimezoneOffset();

    const convertedDate = new Date(date);
    convertedDate.setHours(date.getHours() - (timezoneOffset / hourAsMinutes));
    convertedDate.setMinutes(date.getMinutes() - (timezoneOffset % hourAsMinutes));
    return convertedDate;
  }

}
