window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        packages: {
            '[+]': ['boldsymbol','mathtools', 'unicode']
        },
        macros: {
            R: "{\\bf R}",
            bm: ["{\\boldsymbol #1}", 1],
            llbracket: "{\\unicode{x27E6}}",
            rrbracket: "{\\unicode{x27E7}}"
        },
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    },
    loader: {load: ['[tex]/boldsymbol','[tex]/mathtools', '[tex]/unicode']}
};
