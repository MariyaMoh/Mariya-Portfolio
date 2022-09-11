(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3057:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "AboutMe_container__cRNxW",
	"AboutMeTitle": "AboutMe_AboutMeTitle__H48BH",
	"logos": "AboutMe_logos__0M_Es"
};


/***/ }),

/***/ 12:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "ExperiencePage_title__7St_t",
	"expCards": "ExperiencePage_expCards__fvTqa",
	"icon": "ExperiencePage_icon__usq8l",
	"titleCard": "ExperiencePage_titleCard__N59j1",
	"expContainer": "ExperiencePage_expContainer__c8ity",
	"container": "ExperiencePage_container__3db7P"
};


/***/ }),

/***/ 8925:
/***/ ((module) => {

// Exports
module.exports = {
	"position": "FooterPage_position__wg_5J",
	"imgg": "FooterPage_imgg__rjcfG",
	"links": "FooterPage_links__xG3Vv",
	"LinkedInLink": "FooterPage_LinkedInLink__Oy3eM",
	"GitHubLink": "FooterPage_GitHubLink__DdiP1",
	"footerContainer": "FooterPage_footerContainer__QLPIm"
};


/***/ }),

/***/ 3031:
/***/ ((module) => {

// Exports
module.exports = {
	"position": "HeroPage_position__lHsyd",
	"imggg": "HeroPage_imggg__OlDul",
	"name": "HeroPage_name__IGvV0"
};


/***/ }),

/***/ 3621:
/***/ ((module) => {

// Exports
module.exports = {
	"ProjectsCards": "ProjectPage_ProjectsCards__iGW_M",
	"description": "ProjectPage_description__H6gii",
	"ProjectInfo": "ProjectPage_ProjectInfo__8U1LM",
	"title": "ProjectPage_title__EctY_",
	"card": "ProjectPage_card__0hapH",
	"imggg": "ProjectPage_imggg__GZ_iI",
	"Container": "ProjectPage_Container__zWzIp"
};


/***/ }),

/***/ 962:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryButton": "Button_primaryButton__nkwfP",
	"secondaryButton": "Button_secondaryButton__KVtvT"
};


/***/ }),

/***/ 1628:
/***/ ((module) => {

// Exports
module.exports = {
	"heading1": "Text_heading1__UPKDf",
	"heading2": "Text_heading2__B_z58",
	"heading3": "Text_heading3__oibRO",
	"heading4": "Text_heading4__eJC28",
	"sectionTitle": "Text_sectionTitle__7M7v0"
};


/***/ }),

/***/ 4144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./apolloClient.tsx

const client = new client_namespaceObject.ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/cl39wyq4n1x9u01xs1qzu0rsa/master",
    cache: new client_namespaceObject.InMemoryCache()
});
/* harmony default export */ const apolloClient = (client);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Components/ExperiencePage.module.css
var ExperiencePage_module = __webpack_require__(12);
var ExperiencePage_module_default = /*#__PURE__*/__webpack_require__.n(ExperiencePage_module);
;// CONCATENATED MODULE: external "@react-spring/parallax"
const parallax_namespaceObject = require("@react-spring/parallax");
// EXTERNAL MODULE: ./Components/StyleGuide/Text/Text.module.css
var Text_module = __webpack_require__(1628);
var Text_module_default = /*#__PURE__*/__webpack_require__.n(Text_module);
;// CONCATENATED MODULE: ./Components/StyleGuide/Text/Text.js


const SCALE_TO_CLASS = {
    heading1: "heading1",
    heading2: "heading2",
    heading3: "heading3",
    heading4: "heading4",
    sectionTitle: "sectionTitle"
};
const Base = ({ as: Component = "p" , scale ="body" , children , className , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        className: (Text_module_default())[SCALE_TO_CLASS[`${scale}`]],
        children: children
    })
;
const Heading1 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Base, {
        as: "h1",
        scale: "heading1",
        ...props
    })
;
const Heading2 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Base, {
        as: "h2",
        scale: "heading2",
        ...props
    })
;
const Heading3 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Base, {
        as: "h3",
        scale: "heading3",
        ...props
    })
;
const Heading4 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Base, {
        as: "h4",
        scale: "heading4",
        ...props
    })
;
const SectionTitle = (props)=>/*#__PURE__*/ _jsx(Base, {
        as: "h2",
        scale: "sectionTitle",
        ...props
    })
;

;// CONCATENATED MODULE: ./Components/StyleGuide/Text/index.js


;// CONCATENATED MODULE: ./Components/ExperiencePage.tsx





function ExperiencePage({ experiences: experiences1  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(parallax_namespaceObject.ParallaxLayer, {
        speed: 1,
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // padding: '6rem',
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ExperiencePage_module_default()).title,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Heading2, {
                    as: "h1",
                    id: "Experience",
                    children: "Experience"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ExperiencePage_module_default()).expContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    "data-aos": "flip-left",
                    "data-aos-easing": "ease-out-cubic",
                    "data-aos-duration": "4000",
                    className: (ExperiencePage_module_default()).expCards,
                    children: experiences1.map((experiences)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (ExperiencePage_module_default()).icon,
                                    "data-aos": "zoom-in-up",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: experiences.image.url,
                                        width: 70,
                                        height: 70,
                                        alt: "d"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    "data-aos": "zoom-out-left",
                                    className: (ExperiencePage_module_default()).titleCard,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Heading4, {
                                        children: experiences.title
                                    })
                                })
                            ]
                        }, experiences.id)
                    )
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./Components/ProjectPage.module.css
var ProjectPage_module = __webpack_require__(3621);
var ProjectPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectPage_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./Components/StyleGuide/Button/Button.module.css
var Button_module = __webpack_require__(962);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./Components/StyleGuide/Button/Button.js


const VARIANT = {
    primary: "primaryButton",
    secondary: "secondaryButton"
};
const Button_Base = ({ as: Component = "p" , children , className , variant , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...props,
        className: (Button_module_default())[VARIANT[`${variant}`]],
        children: children
    })
;
const PrimaryButton = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Button_Base, {
        as: "button",
        variant: "primary",
        ...props
    })
;
const SecondaryButton = (props)=>/*#__PURE__*/ _jsx(Button_Base, {
        as: "button",
        variant: "secondary",
        ...props
    })
;

;// CONCATENATED MODULE: ./Components/StyleGuide/Button/index.js


;// CONCATENATED MODULE: ./Components/ProjectPage.tsx







function Projects({ abouts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(parallax_namespaceObject.ParallaxLayer, {
                speed: 1,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "2rem",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectPage_module_default()).title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Heading2, {
                            id: "Experience",
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectPage_module_default()).Container,
                        children: abouts.map((about)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (ProjectPage_module_default()).ProjectsCards,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ProjectPage_module_default()).card,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: (ProjectPage_module_default()).imggg,
                                            src: about.image.url,
                                            alt: "projects images"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (ProjectPage_module_default()).ProjectInfo,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Heading3, {
                                                    children: about.experienceTitle
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: (ProjectPage_module_default()).description,
                                                    children: about.description
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(PrimaryButton, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://github.com/MariyaMoh?tab=repositories",
                                                target: "_blank",
                                                children: "Read More"
                                            })
                                        })
                                    ]
                                })
                            }, about.id)
                        )
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./Components/HeroPage.module.css
var HeroPage_module = __webpack_require__(3031);
var HeroPage_module_default = /*#__PURE__*/__webpack_require__.n(HeroPage_module);
;// CONCATENATED MODULE: ./Components/HeroPage.tsx






function HeroPage() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HeroPage_module_default()).position,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(parallax_namespaceObject.ParallaxLayer, {
                speed: 2,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (HeroPage_module_default()).name,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Heading4, {
                            as: "h1",
                            children: "Mariya ALShaaibi"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Heading1, {
                        children: "Front-end Developer"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                speed: 2,
                style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "2rem",
                    alignItems: "flex-start"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (HeroPage_module_default()).imggg,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "imgg",
                        src: "/arrow.gif",
                        width: 100,
                        height: 100,
                        alt: "img"
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./Components/FooterPage.module.css
var FooterPage_module = __webpack_require__(8925);
var FooterPage_module_default = /*#__PURE__*/__webpack_require__.n(FooterPage_module);
;// CONCATENATED MODULE: ./Components/FooterPage.tsx






function FooterPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
        speed: 1,
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (FooterPage_module_default()).footerContainer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    "data-aos": "zoom-in",
                    className: (FooterPage_module_default()).position,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (FooterPage_module_default()).imgg,
                            src: "/arrow.gif",
                            alt: "img"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "mailto:alshaibi199732@gmail.com",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (FooterPage_module_default()).GetHover,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Heading1, {
                                    className: (FooterPage_module_default()).contacttitle,
                                    children: "Get In Touch"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (FooterPage_module_default()).links,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (FooterPage_module_default()).LinkedInLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://www.linkedin.com/in/mariya-alshaaibi-b6121a1a4/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Heading4, {
                                    children: "LinkedIn"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (FooterPage_module_default()).GitHubLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://github.com/MariyaMoh",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Heading4, {
                                    children: "GitHub"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./Components/AboutMe.module.css
var AboutMe_module = __webpack_require__(3057);
var AboutMe_module_default = /*#__PURE__*/__webpack_require__.n(AboutMe_module);
;// CONCATENATED MODULE: ./Components/AboutMe.tsx






function AboutMe() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(parallax_namespaceObject.ParallaxLayer, {
        speed: 1,
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (AboutMe_module_default()).logos,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "imgg",
                        src: "/Node.js_logo.svg",
                        width: 100,
                        height: 100,
                        alt: "img"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "imgg",
                        src: "/Nextjs-logo.svg",
                        width: 100,
                        height: 100,
                        alt: "img"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "imgg",
                        src: "/MongoDB_Logo.svg",
                        width: 100,
                        height: 100,
                        alt: "img"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "imgg",
                        src: "/react-Logo.svg",
                        width: 100,
                        height: 100,
                        alt: "img"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (AboutMe_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (AboutMe_module_default()).AboutMeTitle,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Heading2, {
                            children: "About Me"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Hey ! I ma Mariya , highly-motivated and creative software developer with robust problem-solving skills. Passionate about learning and consistently advancing my knowledge and skills."
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.tsx









function Home({ experiences , abouts  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(parallax_namespaceObject.Parallax, {
                pages: 6,
                style: {
                    top: "0",
                    left: "0"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                        offset: 0,
                        style: {
                            backgroundColor: `var(--lemon-yellow)`,
                            backgroundSize: "cover",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeroPage, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                        offset: 1,
                        style: {
                            backgroundColor: `var(--flavescent)`,
                            backgroundSize: "cover"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(AboutMe, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                        offset: 2,
                        style: {
                            backgroundColor: "#FFDEB4",
                            backgroundSize: "cover"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                        offset: 3,
                        style: {
                            backgroundColor: "#FFDEB4",
                            backgroundSize: "cover"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ExperiencePage, {
                            experiences: experiences
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                        offset: 4,
                        style: {
                            backgroundColor: "#FFDEB4",
                            backgroundSize: "cover"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(parallax_namespaceObject.ParallaxLayer, {
                        offset: 5,
                        style: {
                            backgroundColor: `var(--flavescent)`,
                            backgroundSize: "cover"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {
                                abouts: abouts
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                                offset: 6,
                                style: {
                                    backgroundColor: "#FFDEB4",
                                    backgroundSize: "cover"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(parallax_namespaceObject.ParallaxLayer, {
                        offset: 7,
                        style: {
                            backgroundColor: "#B2A4FF",
                            backgroundSize: "cover"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterPage, {})
                    })
                ]
            })
        })
    });
};
async function getStaticProps() {
    const { data  } = await apolloClient.query({
        query: client_namespaceObject.gql`
      query {
        experiences {
          image {
            url
          }
          id
          title
          slug
          description
        }

        profiles {
          name
          position
          slug
          id
        }

        abouts {
          experienceTitle
          description

          id
          slug

          image {
            url
          }
        }
      }
    `
    });
    console.log(data);
    const { experiences , profiles , abouts  } = data;
    return {
        props: {
            experiences,
            profiles,
            abouts
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61], () => (__webpack_exec__(4144)));
module.exports = __webpack_exports__;

})();