module.exports = {
    "presets": [
        "@babel/react",
        "@babel/env"
    ],
    "plugins": [
        [
            "@babel/transform-runtime",
            {
                "helpers": false
            }
        ],
        [
            "component",
            {
                "libraryName": "weex-ui",
                "libDir": "packages",
                "style": false
            },
            "weex-ui"
        ],
        [
            "component",
            {
                "libraryName": "eeui-design",
                "libDir": "packages",
                "style": false
            },
            "eeui-design"
        ],
        [
            "component",
            {
                "libraryName": "weex-amui",
                "libDir": "packages",
                "style": false
            },
            "weex-amui"
        ]
    ]
};
