// createIconPropsStruct can be used like a defineProps
// but, you can only override the default property
export function createIconPropsStruct(definedProps = {}) {
  const getDefault = (key, defaultPropsValue) => {
    return definedProps?.[key]?.default || defaultPropsValue
  }

  const defaultColor = 'currentColor'
  const defaultSizeInPixel = 25

  return {
    stroke: {
      type: String,
      default: getDefault('stroke', defaultColor)
    },
    fill: {
      type: String,
      default: getDefault('fill', defaultColor)
    },
    width: {
      type: [String, Number],
      default: getDefault('width', defaultSizeInPixel)
    },
    height: {
      type: [String, Number],
      default: getDefault('height', defaultSizeInPixel)
    }
  }
}
