if (window.location.origin === 'https://3.basecamp.com') {
    require('./sites/basecamp/contentscript');
}


switch (window.location.origin) {
    case 'https://tweakers.net':
        document.body.classList.add('site-tweakers');
        break;
    case 'https://3.basecamp.com':
        document.body.classList.add('site-basecamp');
        require('./sites/basecamp/contentscript');
        break;
    case 'https://favro.com':
        document.body.classList.add('site-favro');
        break;
}

function updateFullScreenClass() {
    if (!window.screenTop && !window.screenY && document.body.classList.contains('site-fullscreen') === false) {
        document.body.classList.add('site-fullscreen');
    }
}

window.addEventListener("resize", function (event) {
    updateFullScreenClass();
});
updateFullScreenClass();
