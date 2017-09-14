![CF](https://i.imgur.com/7v5ASc8.png)  Class 4: Templating
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->

*Templates have some advantages over direct DOM manipulation. Leverage those strengths in the blog, and in your portfolio application, by adding in a templating library! We use templating to abstract away the tiresome work of DOM rendering, and this practice is applied in many front-end libraries and frameworks.*

## Daily Plan

**Code review:** Let's take a deep look at yesterdays lab assignment

```10 minute break```

**Assorted topics to hit quickly**

- [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/)? What the heck is [ECMA](http://www.ecma-international.org/)?
- [ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) docs, and [an article on them by Addy Osmani](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings).
	- Why? Take a look at these two things...
	- Remember that annoying concatenated assignment of the `var option` from  from yesterday...
		- `'<option value="' + authorName + '">' + authorName + '</option>';`
	- That can be replaced with this!
		- `<option value="${authorName}">${authorName}</option>`;
		- WAY less confusing!!!
- Regular Expressions (RegEx)
	- [*MDN: "Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions."*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
	- [**Eloquent Javascript**'s take on RegEx](http://eloquentjavascript.net/09_regexp.html)

**Templating (slides)**

- What is an HTML templating system?
- Why use templating? How is a templating system useful?

**Templating with [Handlebars.js](http://handlebarsjs.com/)**

- How did we do templating on Days 2 & 3? Used jQuery to pull HTML from the DOM that we then repurposed.
- Now by putting the template in the `<head>` means there's no concern with it displaying and no need to manage that any longer.
- Handlebars lets us get rid of a lot of the "[brittle](http://lmgtfy.com/?q=brittle+code)" jQuery.
- Look at the [tryhandlebarsjs.com](http://tryhandlebarsjs.com/) demos!

```10 minute break```

- [Code demo](https://github.com/codefellows/301-04-handlebars-demo) for us to hack together!

- **Lab prep**
	- Let's review the starter code and REVIEWs and TODOs!
  	- The skinny: you're getting rid of the old templating and replacing it with Handlebars!
  	- 'Staches FTW!
  	- **{{WIN}}**

## Learning Objectives
<!--
ABCD:
  Audience: Program participants
  Behavior: Expected learning/behavior changes/results
  Condition:
    Circumstances that lead to change/result
    When change/result are expected to occur
  Degree: How much change occurs (%) for how many participants (#)
-->

* Identify different approaches to reusable HTML templates

* Effectively use templates to present user-entered (or server-provided) data (methods on the Handlebars object).

* Distinguish between the different Handlebars expression types ( **{{}}** vs **{{{}}}** ).

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->

* [Handlebars.js Official Documentation](http://handlebarsjs.com/) (Reference)

* [Learn Handlebars.js in 10 Minutes tutorial](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/) (Essential)
