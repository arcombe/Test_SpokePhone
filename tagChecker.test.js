const checkTags = require('./tagChecker');

test('Test a correct instance of tags.', () => {
  expect(checkTags("The following text<C><B>is centred and in boldface</B></C>")).toBe('Correctly tagged paragraph');
  expect(checkTags("<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence")).toBe('Correctly tagged paragraph');
});

test('Test wrongly nested tags.', () => {
  expect(checkTags('<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>')).toBe('Expected </C> found </B>');
})

test('Test extra closing tag.', () => {
  expect(checkTags('<B>This should be in boldface, but there is an extra closing tag</B></C>')).toBe('Expected # found </C>')
})

test('Test a missing closing tag.', () => {
  expect(checkTags('<B><C>This should be centred and in boldface, but there is a missing closing tag</C>')).toBe('Expected </B> found #');
})
