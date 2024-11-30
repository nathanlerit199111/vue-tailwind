const appName = 'Vue Template';
const baseURL = import.meta.env.VITE_APP_BASE_URL
export const meta = {
  "login": {
    title: `${appName} - Login `,
    metaTags: [
        {
            name: "twitter:site",
            content: "@yourtwitterhandle",
        },
        {
            name: "twitter:title",
            content: `${appName} - Example Meta Title `,
        },
        {
            name: "twitter:description",
            content: "This is an example meta description.",
        },
        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:image",
            content: `${baseURL}/src/assets/meta/social-media-sharer.png`,
        },
        {
            name: "twitter:image",
            property: `${baseURL}/src/assets/meta/social-media-sharer.png`,
        },
        {
            name: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: baseURL,
        },
        {
            property: "description",
            content: "This is an example meta description.",
        },
        {
            property: "og:title",
            content: `${appName} - Example Meta Title `,
        },
        {
            property: "og:description",
            content: "This is an example meta description.",
        },
        {
            property: 'og:image',
            content: `${baseURL}/src/assets/meta/social-media-sharer.png`,
        }
    ],
  },
  "home": {
    title:  `${appName}`,
    metaTags: [
        {
            name: "twitter:site",
            content: "@yourtwitterhandle",
        },
        {
            name: "twitter:title",
            content: `${appName} - Example Meta Title `,
        },
        {
            name: "twitter:description",
            content: "This is an example meta description.",
        },
        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            name: "twitter:image",
            content: `${baseURL}/src/assets/meta/social-media-sharer.png`,
        },
        {
            name: "twitter:image",
            property: `${baseURL}/src/assets/meta/social-media-sharer.png`,
        },
        {
            name: "og:type",
            content: "website",
        },
        {
            property: "og:url",
            content: baseURL,
        },
        {
            property: "description",
            content: "This is an example meta description.",
        },
        {
            property: "og:title",
            content: `${appName} - Example Meta Title `,
        },
        {
            property: "og:description",
            content: "This is an example meta description.",
        },
        {
            property: 'og:image',
            content: `${baseURL}/src/assets/meta/social-media-sharer.png`,
        }
    ],
  },
  // Error pages
  "error-404": {
    title: `${appName} - Page Not Found `,
    metaTags: [
        {
            name: "robots", 
            content: "noindex, nofollow" // it will set the page to uncrawlable
        },
        {
            property: "og:title",
            content: `${appName} - Page Not Found `,
        },
        {
            property: "description",
            content: "We can't seem to find the page you're looking for.",
        }
    ],
  },
  "error-403": {
    title: `${appName} - Page Forbidden `,
    metaTags: [
        {
            name: "robots",
            content: "noindex, nofollow"
        },
        {
            property: "og:title",
            content: `${appName} - Page Forbidden `,
        },
        {
            property: "description",
            content: "Not authorized to view this page.",
        }
    ],
  },
};

/**
 * Helper function to set meta tags for the current route.
 * 
 * @param {Route} to - The target Route Object being navigated to.
 * @param {Route} from - The current Route Object being navigated away from.
 */
const setMeta = (to, from) => {
  // Find the nearest route with a title and set the document title
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  // Find the nearest route with meta tags and add them to the document head
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // Use the previous nearest route's title if the current route doesn't have one
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // Set the document title
  if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
  } else {
      // TODO: add default name of the web app
      document.title = appName; 
  }

  // Remove any existing meta tags controlled by Vue Router
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).forEach(el => el.parentNode.removeChild(el));

  // Add meta tags to the document head if available
  if (nearestWithMeta) {
      nearestWithMeta.meta.metaTags.forEach(tagDef => {
          const tag = document.createElement('meta');
          Object.keys(tagDef).forEach(key => {
              tag.setAttribute(key, tagDef[key]);
          });
          // Add a data attribute to mark the tag as controlled by Vue Router
          tag.setAttribute('data-vue-router-controlled', '');
          document.head.appendChild(tag);
      });
  }
};

export { setMeta };