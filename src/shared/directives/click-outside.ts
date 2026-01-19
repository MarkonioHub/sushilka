import type { Directive, DirectiveBinding } from 'vue'

interface ClickOutsideElement extends HTMLElement {
  __clickOutsideHandler__?: EventListener
}

const vClickOutside: Directive = {
  beforeMount(el: ClickOutsideElement, binding: DirectiveBinding<Function>) {
    el.__clickOutsideHandler__ = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.__clickOutsideHandler__)
  },
  unmounted(el: ClickOutsideElement) {
    if (el.__clickOutsideHandler__) {
      document.body.removeEventListener('click', el.__clickOutsideHandler__)
    }
  },
}

export default vClickOutside
