chrome.omnibox.onInputEntered.addListener(function(text) {
    // Convert 'ag/REPO' to 'alphagov/REPO'.
    text = text.replace('ag/','alphagov/');
    chrome.tabs.getSelected(null, function(tab) {
        // The `text` should be 'alphagov/REPO'.
        chrome.tabs.update(tab.id, {"url": "https://github.com/" + text});
    });
});
