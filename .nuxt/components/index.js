export { default as ButtonWebComponent } from '../..\\components\\ButtonWebComponent.vue'
export { default as FooterCpn } from '../..\\components\\FooterCpn.vue'
export { default as FooterHomeCpn } from '../..\\components\\FooterHomeCpn.vue'
export { default as HeaderCpn } from '../..\\components\\HeaderCpn.vue'
export { default as InputPasswordWebComponent } from '../..\\components\\InputPasswordWebComponent.vue'
export { default as InputSearchWebcomponent } from '../..\\components\\InputSearchWebcomponent.vue'
export { default as InputWebComponent } from '../..\\components\\InputWebComponent.vue'
export { default as LoginCpn } from '../..\\components\\LoginCpn.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as SidebarCpn } from '../..\\components\\SidebarCpn.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
