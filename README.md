# mumtaz

Micromaterials for learning Sanskrit: http://sanskritsadhu.guru/#/

> Inspired by [Adam Leskis'](https://github.com/lpmi-13) micromaterials for learning English.

![Om](logo.png)

## What Micromaterials Are There?

* _Alphabet_ :: recognizing the Devanagari letterforms.

> Inspired by [Typewar](http://typewar.com/).

* _Vowel Conjunction_ :: joining consonants with vowels.

* _Numbers_ :: recognizing the Devanagari numerals.

* _What's The Next Number?_ :: ordering the Devanagari numerals.

## What Micromaterial Are Planned?

* _संयोग (saṃyoga)_ :: joining consonants with consonants ([conjunction](http://learnsanskrit.org/references/devanagari/conjunct)).

## Reference

* [Unicode Characters in the Devanagari Block](http://www.fileformat.info/info/unicode/block/devanagari/list.htm)
* [Devanagari Script Unicode Entity Codes](http://sites.psu.edu/symbolcodes/languages/southasia/devanagari/devanagarichart/)
* [Conjunct Consonants](http://learnsanskrit.org/references/devanagari/conjunct)
* [Devanagari Letters](https://commons.wikimedia.org/wiki/Category:Devanagari_letters)
* [Sanskrit 1: Beginners](https://www.conted.ox.ac.uk/courses/sanskrit-1-beginners?code=O18P638XNW)

## Development

- run `npm run build` after cloning, this creates the dependencies in `src/components`.
- then `npm start` should start up the local development server on port 8080.

## Deployment

Using [Surge](https://surge.sh/).

```bash
$ npm run build
$ cd dist
$ surge

sanskritsadhu.guru
```

Using [Netlify](https://netlify.com/).
(this is essentially the same as surge, but you get https by default)

- register for a netlify account
- connect it to your github repo
- trigger a build by clicking in the netlify UI or push to `master`

https://sanskritsadhu.netlify.com


## Emojis

Emojis by [EmojiOne](https://www.emojione.com/).

## Symbols

* halanta `&#x094D;` &#x094D;

<pre>
  <!-- <div id="scratch"> -->
    <!-- &#x903;&#x93f; -->
    <!-- &#x0915;&#x93f;
    &#x939;&#x93f; -->
    <!-- <br>&#x0924; &#x094D; &#x200D; &#x0928;
    <br>&#x0924;&#x094D;&#x200D;&#x0928;
    <br>&#x0924;&#x094D; -->
    <!-- halant symbol appended -->

    <!-- &‌#x0901; -->
    <!-- &#x0905; -->
    <!-- &‌#x092F;&‌#x0917;&‌#x094B;&‌#x0440;&‌#x0940; -->
  <!-- </div> -->
</pre>
