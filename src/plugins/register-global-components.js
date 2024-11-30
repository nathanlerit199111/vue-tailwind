import { camelCase, upperFirst } from 'lodash'

export default {
  install(app) {
    /*
      TO DO:
      SOLUTION 1: Either create a Global Folder and use wild card

      SOLUTION 2: Use the existing folder structure and import manually that needs to use globally
    */
    const componentFiles = import.meta.glob('@/components/Common/*.vue', {
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
