import Layout from './Layout'
import ExpandRow from './ExpandRow'

const components = [
  Layout,
  ExpandRow
]

const install = function install (Vue) {
  if (install.installed) return

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
