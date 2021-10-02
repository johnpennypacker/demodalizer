# Demodalizer

## How do I use Demodalizer?

<div id="installation"><p>Drag this bookmarklet to your favorites bar: <a href="javascript:var modalSelectors=[&quot;._5hn6&quot;,&quot;div#onetrust-consent-sdk&quot;,&quot;div[class*='intromercial' i]&quot;,&quot;div[class*='modal' i]&quot;,&quot;div[data-test-id*='Modal' i]&quot;,&quot;div[class*='flyout' i]&quot;,&quot;div[class*='paywall' i]&quot;,&quot;div[class*='_pendo' i]&quot;,&quot;div[class*='popup' i]&quot;,&quot;div[class*='pop-up' i]&quot;,&quot;div[class*='pop_up' i]&quot;,&quot;div[class*='popmake' i]&quot;,&quot;div[role*='dialog' i]&quot;,&quot;div.tp-active&quot;,&quot;div.js-consent-banner&quot;,&quot;div.cookie-consent&quot;,&quot;iframe[title*=modal] i&quot;,&quot;#fortress-paywall-container-root&quot;,&quot;#paywall&quot;],commonAdSelectors=[&quot;.advertisement&quot;,&quot;.adtop&quot;],s=[].concat(modalSelectors,commonAdSelectors);document.querySelectorAll(s.join(&quot;,&quot;)).forEach(o=>{o.style.setProperty(&quot;display&quot;,&quot;none&quot;,&quot;important&quot;)}),document.querySelectorAll(&quot;html,body&quot;).forEach(o=>{o.style.setProperty(&quot;overflow&quot;,&quot;auto&quot;,&quot;important&quot;)}),document.onblur=function(){return!1};">Demodalizer</a>.</p></div>

When presented with a modal, hit the bookmark and make the modals go away.

## What is a modal window?

A modal, or modal window, is an element of a webpage that seeks your attention by disrupting your browsing activity. Typically, it's a prompt that asks you for something, and usually it requires that you dismiss it before proceeding... like a popup window that's harder to close.

## What does Demodalizer do?

It looks for HTML that matches particular patterns that tend to be unique to modal windows, and it hides them.  It also re-enables scrolling on pages that restrict that.

## Why did you make Demodalizer?

Because modals suck. Think of this as a modern twist on your conventional popup blocker.

## Who is Demodalizer for?

Anyone who hates popups — more specifically, anyone who hates modals.

## Can I help?

Feedback, contributions, feature requests, and complaints are welcome.  [File an issue](https://github.com/johnpennypacker/demodalizer/issues) or [make a pull request](https://github.com/johnpennypacker/demodalizer/pulls).

