const { format_date, format_plural, format_url } = require('../utils/helpers');

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2020-08-30 20:20:08');

    expect(format_date(date)).toBe('8/30/2020');
});

// plural point and comments
test('format_plural() returns a pluralized word', () => {
    const plural = format_plural('shark', 2);
    const single = format_plural('snake', 1);

    expect(plural).toBe('sharks');
    expect(single).toBe('snake');
});

// shortening URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://quirky.com/quixotic/152');
    const url2 = format_url('https://www.mindmap.com/stuffworks/');
    const url3 = format_url('https://www.google.com?q=jello');

    expect(url1).toBe('quirky.com');
    expect(url2).toBe('mindmap.com');
    expect(url3).toBe('google.com');
});