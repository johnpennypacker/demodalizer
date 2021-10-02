# Demodalizer

## How do I use Demodalizer?

<div id="installation">Put the contents of this file into the URL of a bookmark: [Demodalizer](https://raw.githubusercontent.com/johnpennypacker/demodalizer/master/output/bookmarklet-demodalizer.min.js).</div>

When presented with a modal, hit the bookmark and make the modals go away.

## What is a modal window?

A modal, or modal window, is an element of a webpage that seeks your attention by disrupting your browsing activity.  Typically, it's a prompt that asks you for something, and usually it requires that you dismiss it before proceeding to the page's content.  It's like a popup window that's harder to close.

## What does Demodalizer do?

It looks for HTML that matches particular patterns that tend to be unique to modal windows, and it hides them.  It also re-enables scrolling on pages that restrict that.

## Why did you make Demodalizer?

Because modals suck. Think of this as a modern twist on your conventional popup blocker.

## Who is Demodalizer for?

Anyone who hates popups — more specifically, anyone who hates modals.

## Can I help?

Feedback, contributions, feature requests, and complaints are welcome.  [File an issue](https://github.com/johnpennypacker/demodalizer/issues) or [make a pull request](https://github.com/johnpennypacker/demodalizer/pulls).

<script>
const url = "https://raw.githubusercontent.com/johnpennypacker/demodalizer/master/output/bookmarklet-demodalizer.min.js"
function loadBookmarklet(url, success) {
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
	};
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xhr.send();
	return xhr;
}

// example request
loadBookmarklet( url, function(data) { console.log(data); } );
</script>
