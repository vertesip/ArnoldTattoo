export const AboutMeSection = () => import('../../components/AboutMeSection.vue' /* webpackChunkName: "components/about-me-section" */).then(c => wrapFunctional(c.default || c))
export const BannerSection = () => import('../../components/BannerSection.vue' /* webpackChunkName: "components/banner-section" */).then(c => wrapFunctional(c.default || c))
export const BookingSection = () => import('../../components/BookingSection.vue' /* webpackChunkName: "components/booking-section" */).then(c => wrapFunctional(c.default || c))
export const ContactSection = () => import('../../components/ContactSection.vue' /* webpackChunkName: "components/contact-section" */).then(c => wrapFunctional(c.default || c))
export const FooterElement = () => import('../../components/FooterElement.vue' /* webpackChunkName: "components/footer-element" */).then(c => wrapFunctional(c.default || c))
export const GallerySection = () => import('../../components/GallerySection.vue' /* webpackChunkName: "components/gallery-section" */).then(c => wrapFunctional(c.default || c))
export const GoogleMap = () => import('../../components/GoogleMap.vue' /* webpackChunkName: "components/google-map" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const ShirtsSection = () => import('../../components/ShirtsSection.vue' /* webpackChunkName: "components/shirts-section" */).then(c => wrapFunctional(c.default || c))

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
