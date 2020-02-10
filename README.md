# Tag Checker Problem

This is a solution for Spoke Phones Tag Checker Problem, a description of the
problem can be found in the end.

## Solution

The program takes a single string and using regex finds all the opening and
closing tags. It then iterates through the tags in order and whenever it
encounters a closing tag, it tries to match it with last opening tag. If it
encounters a mismatch or a missing tag it returns an error message.

file tagChecker.js

## TDD

The program was written following TDD, the test examples used was the ones
provided in the problem description. 4 different tests were used testing:

* Test a correct instance of tags.
* Test wrongly nested tags.
* Test extra closing tag.
* Test a missing closing tag

The test can be found in tagChecker.test.js

## Installing

Install dependencies

```
npm install

```

## Running the program

Execute

```
node tagChecker "<B>A test string that can be changed to any</B>"

```

The string can be changed to whatever you want to try.

## Running the test
Execute

```
npm test

```

## Tag Checker Problem
```
Markup languages such as HTML use tags to highlight sections with special significance. In this way, a sentence
in boldface can be indicated thus:

<B>This is a sentence in boldface</B>

Typically every tag has an opening tag of the form <TAG> and a closing tag of the form </TAG>, so that portions
of text can be bracketed as above. Tags can then be combined to achieve more than one effect on a particular piece
of text simply by nesting them properly, for instance:

<CENTER><B>This text is centred and in boldface</B></CENTER>

Two of the most common mistakes when tagging text are:
 getting the nesting wrong:
<B><CENTER>This should be centred boldface, but the tags are wrongly nested</B></CENTER>
 forgetting a tag:
<B><CENTER>This should be centred boldface, but there is a missing tag</CENTER>
Write a program to check that all the tags in a given piece of text (a paragraph) are correctly nested, and that there
are no missing or extra tags. An opening tag for this problem is enclosed by angle brackets, and contains exactly
one upper case letter, for example <T>, <X>, <S>. The corresponding closing tag will be the same letter preceded
by the symbol /; for the examples above these would be </T>, </X>, </S>.
If the paragraph is correctly tagged then output the line “Correctly tagged paragraph”, otherwise output a line of
the form “Expected <expected> found <unexpected>” where <expected> is the closing tag matching the most
recent unmatched tag and <unexpected> is the closing tag encountered. If either of these is the end of paragraph,
i.e. there is either an unmatched opening tag or no matching closing tag at the end of the paragraph, then replace
the tag or closing tag with #. These points are illustrated in the examples below which should be followed exactly
as far as spacing is concerned.

Sample Input

* "The following text<C><B>is centred and in boldface</B></C>"
* "<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence"
* "<B><C> This should be centred and in boldface, but the
tags are wrongly nested </B></C>"
* "<B>This should be in boldface, but there is an extra closing
tag</B></C>"
* "<B><C>This should be centred and in boldface, but there is
a missing closing tag</C>"

Sample Output

Correctly tagged paragraph
Correctly tagged paragraph
Expected </C> found </B>
Expected # found </C>
Expected </B> found
```
