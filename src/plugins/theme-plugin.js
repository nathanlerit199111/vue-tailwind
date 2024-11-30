// Generate CSS based on a configuration object
export const generateStyles = (config) => {
    let styles = ':root {';
    Object.entries(config).forEach(([category, properties]) => {
      Object.entries(properties).forEach(([className, value]) => {
        if (typeof value !== 'object') {
          styles += `--${className}: ${value};`;
        }
      });
    });
    styles += '}';
    return styles;
  };
  
  // Apply the theme CSS
  export const applyThemeCSS = (customTheme) => {
    const CUSTOMSTYLES = generateStyles(customTheme);
  
    const STOREDTHEMECSS = localStorage.getItem('themeCSS');
    if (STOREDTHEMECSS) {
      const parsedThemeCSS = JSON.parse(STOREDTHEMECSS);
  
      let parsedCUSTOMSTYLES = ':root {';
      Object.entries(parsedThemeCSS).forEach(([category, properties]) => {
        Object.entries(properties).forEach(([className, value]) => {
          if (typeof value !== 'object') {
            parsedCUSTOMSTYLES += `--${className}: ${value};`;
          }
        });
      });
      parsedCUSTOMSTYLES += '}';
  
      const styleElement = document.createElement('style');
      styleElement.textContent = parsedCUSTOMSTYLES;
      document.head.appendChild(styleElement);
    } else {
      const styleElement = document.createElement('style');
      styleElement.textContent = CUSTOMSTYLES;
      document.head.appendChild(styleElement);
    }
  };
  