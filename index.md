# Demodalizer

## Installation and use

<div id="installation"><p>Drag this bookmarklet to your favorites bar: <a href="javascript:var modalSelectors=[&quot;._5hn6&quot;,&quot;div#onetrust-consent-sdk&quot;,&quot;div[class*='intromercial' i]&quot;,&quot;div[class*='modal' i]&quot;,&quot;div[data-test-id*='Modal' i]&quot;,&quot;div[class*='flyout' i]&quot;,&quot;div[class*='paywall' i]&quot;,&quot;div[class*='_pendo' i]&quot;,&quot;div[class*='popup' i]&quot;,&quot;div[class*='pop-up' i]&quot;,&quot;div[class*='pop_up' i]&quot;,&quot;div[class*='popmake' i]&quot;,&quot;div[role*='dialog' i]&quot;,&quot;div.tp-active&quot;,&quot;div.js-consent-banner&quot;,&quot;div.cookie-consent&quot;,&quot;iframe[title*=modal] i&quot;,&quot;#fortress-paywall-container-root&quot;,&quot;#paywall&quot;],commonAdSelectors=[&quot;.advertisement&quot;,&quot;.adtop&quot;],s=[].concat(modalSelectors,commonAdSelectors);document.querySelectorAll(s.join(&quot;,&quot;)).forEach(o=>{o.style.setProperty(&quot;display&quot;,&quot;none&quot;,&quot;important&quot;)}),document.querySelectorAll(&quot;html,body&quot;).forEach(o=>{o.style.setProperty(&quot;overflow&quot;,&quot;auto&quot;,&quot;important&quot;)}),document.onblur=function(){return!1};">Demodalizer</a>.</p></div>

When presented with a modal, hit the bookmark and make the modals go away.

## Modal windows

Modals, or modal windows, are elements of a webpage that seek your attention by disrupting your browsing activity. Typically, a modal will be a prompt that asks you for something, and usually it requires that you dismiss it before proceeding. They're like popup windows that are harder to close.

## How it works

Demodalizer looks for HTML that matches particular patterns that tend to be unique to modal windows and it hides anything that matches. It doesn't accept or reject any terms or policies. It doesn't submit any forms. It just removes the modal windows from your view. It also re-enables scrolling on pages that restrict that and it tries to proactively suppress modals that will appear when you're about to leave a page.

## Potential side effects

It's possible that demodalizer will hide something you want, refreshing the page will undo everything demodalizer did. It also hides some advertisements and may interfere with tracking software that records when your cursor leaves the window.

## Can I help?

Feedback, contributions, feature requests, and complaints are welcome. [Browse the repo](https://github.com/johnpennypacker/demodalizer), [file an issue](https://github.com/johnpennypacker/demodalizer/issues), or [make a pull request](https://github.com/johnpennypacker/demodalizer/pulls).

