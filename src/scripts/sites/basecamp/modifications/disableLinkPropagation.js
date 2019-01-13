const disableLinkPropagation = () => {
  let linkElements = document.querySelectorAll('a');

  Array.from(linkElements).forEach((linkElement) => {

    if(linkElement.getAttribute('data-behavior') !== null) {
      return;
    }

    linkElement.addEventListener("click", function(e) {
      event.stopPropagation();
    });
  });
}

module.exports = disableLinkPropagation;
