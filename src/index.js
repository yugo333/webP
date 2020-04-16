import _ form 'lodash';

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["hello", "webpack", ""]);

  return element;
}

document.body.appendChild(component());
