# Demodalizer

## Installation and use

<div id="installation"><p>Drag this bookmarklet to your favorites bar: <a href="javascript:var modalSelectors=["._5hn6",".bx-base",".ch2>div[class^='ch2']","#attentive_creative","div[id*='bottom-banner' i][class*='dcr']","div#onetrust-consent-sdk","div[aria-modal]","div[class*='alert-' i]","div[class*='consent' i]","div.cookie-consent","div[class*='cookie' i]","div#cookie-banner","div[role*='dialog' i]","div[id*='engagement-container-' i]","div[class*='evidon' i]","div[class*='flyout' i]","div.frel_overlay","div[class*='gdpr-' i]","div#getsitecontrol","#HardsellOverlay",".fullscreen-overlay","div[class*='intromercial' i]","div.js-consent-banner","div[id*='layer-cover' i]","div.mfp-bg","div[class*='modal' i]","iframe[title*=modal] i","div[data-test-id*='Modal' i]","div[id*='overlay_' i]","div[class*='overlay-' i]","div[class*='_pendo' i]","div[id*='pico_prompt' i]","div[class*='popover' i]","div[class*='popup' i]","div[id*='popup' i]","div[class*='pop-' i]","div[class*='pop_' i]","div[class*='popmake' i]","#paywall","div.qc-cmp-cleanslate","#truste-consent-track","div[id^='sp_message_container_' i]","div.tp-active","div#usercentrics-root","ytd-popup-container"],commonAdSelectors=[".ad",".advertisement",".adtop","div[class$='_ad' i]",".doctcom-ad"],s=[].concat(modalSelectors,commonAdSelectors);document.querySelectorAll(s.join(",")).forEach((i=>{i.style.setProperty("display","none","important")})),document.querySelectorAll("html, body").forEach((i=>{i.style.setProperty("overflow","auto","important"),i.style.setProperty("position","relative","important")})),document.onblur=function(){return!1};">Demodalizer</a>.</p></div>

When presented with a modal, hit the bookmark and make the modals go away.  _Tip: map the bookmarklet to a hot key_.

## Modal windows

Modals, also known as modal windows or page take-overs, are elements of a webpage that seek your attention by disrupting your browsing activity. Typically, a modal will be a prompt that asks you for something, and usually it requires that you dismiss it before proceeding. They're like popup windows that are harder to close.

## How it works

Demodalizer looks for elements that match common modal windows and then hides them. It doesn't accept or reject any terms or policies. It doesn't submit any forms. It just removes the modal windows from your view. It also re-enables scrolling on pages that restrict that and it tries to suppress modals that will appear when you're about to leave a page. It may also hide some advertisements and interfere with tracking software that records when your cursor leaves the window.

## Potential side effects

It's possible that demodalizer will hide something it shouldn't. Refresh the page to undo everything demodalizer did. 

## You can help

Feedback, contributions, feature requests, and complaints are welcome. [Browse the code](https://github.com/johnpennypacker/demodalizer), [file an issue](https://github.com/johnpennypacker/demodalizer/issues), or [make a pull request](https://github.com/johnpennypacker/demodalizer/pulls).

