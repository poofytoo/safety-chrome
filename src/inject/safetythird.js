chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://runpengliu.com/safetythird-ext/js/safetythird.js";
            script.async = true;
            $('html').append(script);
            clearInterval(readyStateCheckInterval);
        }
    }, 10);
});
