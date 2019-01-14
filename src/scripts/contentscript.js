if(window.location.origin === 'https://3.basecamp.com') {
  require('./sites/basecamp/contentscript');
}

switch (window.location.origin) {
  case 'https://tweakers.net':
      document.body.className += ' site-tweakers';
    break;
  case 'https://3.basecamp.com':
    document.body.className += ' site-basecamp';
    require('./sites/basecamp/contentscript');
    break;
  case 'https://favro.com':
      document.body.className += ' site-favro';
      break;
}
