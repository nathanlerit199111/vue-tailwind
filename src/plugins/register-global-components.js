import { camelCase, upperFirst } from 'lodash'

export default {
  install(app) {
    const componentFiles = import.meta.glob('@/components/UIElements/AppIcon.vue', {
      eager: true
    })

    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
      )

      app.component(`${componentName}`, m.default)
    })
  }
}
