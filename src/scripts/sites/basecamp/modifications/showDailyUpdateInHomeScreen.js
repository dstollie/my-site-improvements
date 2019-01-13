const DAILY_UPDATE_URL = 'https://3.basecamp.com/3946965/buckets/6514965/questions/900812066';

const showDailyUpdateInHomeScreen = () => {

  fetch(DAILY_UPDATE_URL, {credentials: "same-origin"}).then((response) => response.text()).then((rawHtml) => {
    const parser = new DOMParser();
    const htmlElement = parser.parseFromString(rawHtml, "text/html");

    const panel = htmlElement.querySelector('.panel--perma');
    const headerToBeRemoved = panel.querySelector('.message__header');
    headerToBeRemoved.parentNode.removeChild(headerToBeRemoved);

    const innerHtml = panel.innerHTML;

    let html = `
        <section class="project-index__section" data-role="project_group content_filter_group">
          <header class="centered" data-role="project_group_header">
            <h3 class="project-index__header break break--on-background push_quarter--bottom">
              <span>Wat have you been doing yesterday?</span>
            </h3>
          </header>

          <div style="max-height: 500px; overflow-y:scroll;">
            ${innerHtml}
          </div>
        </section>
      `;

    document.querySelector('.project-index__section').insertAdjacentHTML('beforebegin', html);
  })
}

module.exports = showDailyUpdateInHomeScreen;
