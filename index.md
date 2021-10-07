# Demodalizer

## Installation and use

<div id="installation"><p>Drag this bookmarklet to your favorites bar: <a href="javascript:var modalSelectors=[&quot;._5hn6&quot;,&quot;div[id*='bottom-banner' i][class*='dcr']&quot;,&quot;div#onetrust-consent-sdk&quot;,&quot;div[class*='alert-' i]&quot;,&quot;div[class*='consent' i]&quot;,&quot;div.cookie-consent&quot;,&quot;div[role*='dialog' i]&quot;,&quot;div[id*='engagement-container-' i]&quot;,&quot;div[class*='flyout' i]&quot;,&quot;div[class*='gdpr-' i]&quot;,&quot;.fullscreen-overlay&quot;,&quot;div[class*='intromercial' i]&quot;,&quot;div.js-consent-banner&quot;,&quot;div[id*='layer-cover' i]&quot;,&quot;div[class*='modal' i]&quot;,&quot;iframe[title*=modal] i&quot;,&quot;div[data-test-id*='Modal' i]&quot;,&quot;div[id*='overlay_' i]&quot;,&quot;div[class*='overlay-' i]&quot;,&quot;div[class*='paywall' i]&quot;,&quot;div[id*='paywall' i]&quot;,&quot;div[class*='_pendo' i]&quot;,&quot;div[class*='popup' i]&quot;,&quot;div[id*='popup' i]&quot;,&quot;div[class*='pop-' i]&quot;,&quot;div[class*='pop_' i]&quot;,&quot;div[class*='popmake' i]&quot;,&quot;#paywall&quot;,&quot;div.tp-active&quot;,&quot;ytd-popup-container&quot;],commonAdSelectors=[&quot;.advertisement&quot;,&quot;.adtop&quot;,&quot;div[class$='_ad' i]&quot;],s=[].concat(modalSelectors,commonAdSelectors);document.querySelectorAll(s.join(&quot;,&quot;)).forEach((i=>{i.style.setProperty(&quot;display&quot;,&quot;none&quot;,&quot;important&quot;)})),document.querySelectorAll(&quot;html, body&quot;).forEach((i=>{i.style.setProperty(&quot;overflow&quot;,&quot;auto&quot;,&quot;important&quot;)})),document.onblur=function(){return!1};">Demodalizer</a>.</p></div>

When presented with a modal, hit the bookmark and make the modals go away.  _Tip: map the bookmarklet to a hot key_.

## Modal windows

Modals, also known as modal windows or page take-overs, are elements of a webpage that seek your attention by disrupting your browsing activity. Typically, a modal will be a prompt that asks you for something, and usually it requires that you dismiss it before proceeding. They're like popup windows that are harder to close.

## How it works

Demodalizer looks for elements that match common modal windows and then hides them. It doesn't accept or reject any terms or policies. It doesn't submit any forms. It just removes the modal windows from your view. It also re-enables scrolling on pages that restrict that and it tries to suppress modals that will appear when you're about to leave a page. It may also hide some advertisements and interfere with tracking software that records when your cursor leaves the window.

## Potential side effects

It's possible that demodalizer will hide something it shouldn't. Refresh the page to undo everything demodalizer did. 

## You can help

Feedback, contributions, feature requests, and complaints are welcome. [Browse the code](https://github.com/johnpennypacker/demodalizer), [file an issue](https://github.com/johnpennypacker/demodalizer/issues), or [make a pull request](https://github.com/johnpennypacker/demodalizer/pulls).

