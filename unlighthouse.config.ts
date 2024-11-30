export default {
    // example
    site: 'http://localhost:4173/',
    cookies: [
        {
            name: 'authToken',
            value: 'authValue',
            domain: 'localhost',
        },
    ],
    device: 'mobile',
    scanner: {
      dynamicSampling: false,
      skipJavascript: false,
      sitemap: false
    },
    debug: true,
  }