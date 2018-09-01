import Vue from 'vue'


Vue.directive('fragment', {
  inserted(element) {
    const fragment = document.createDocumentFragment();
    Array.from(element.childNodes).forEach(child => fragment.appendChild(child));
    element.parentNode.insertBefore(fragment, element);
    element.parentNode.removeChild(element);
  }
});
