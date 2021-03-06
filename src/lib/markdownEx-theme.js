let theme = {
    base: "vs-dark",
    inherit: true,
    rules: [
        //---------------special colors------------------
        {
            foreground: "569fff",
            token: "markdown.header",
            fontStyle: "bold",
        },
        {
            foreground: "00d2d3",
            token: "markdown.quote.sign",
            fontStyle: "italic",
        },
        {
            token: "markdown.quote.detail",
            fontStyle: "italic",
        },
        {
            foreground: "ff9f43",
            token: "markdown.list",
        },
        {
            foreground: "88d74a",
            token: "markdown.codeblock",
        },
        {
            foreground: "ffc0cb",
            token: "markdown.customcontainer",
        },
        {
            foreground: "f8728e",
            token: "markdown.table.header",
        },

        //---------------Line string colors----------------
        {
            foreground: "66cc33",
            token: "string",
        },
        {
            foreground: "d54e53",
            token: "string.other.link",
        },
        {
            foreground: "d54e53",
            token: "string.regexp",
        },
        {
            foreground: "ffce54",
            fontStyle: "bold",
            token: "markdown.strong",
        },
        {
            foreground: "a0d468",
            fontStyle: "italic",
            token: "markdown.emphasis",
        },
        {
            foreground: "ac92ec",
            token: "markdown.code",
        },
        {
            foreground: "ac92ec",
            token: "markdown.important",
            fontStyle: "bold italic",
        },
        {
            foreground: "48cfad",
            token: "markdown.target",
            fontStyle: "bold",
        },
        {
            foreground: "5E5E5E",
            token: "markdown.strikethrough",
        },
        {
            foreground: "ff9a9e",
            token: "markdown.subscript",
        },
        {
            foreground: "a8c0ff",
            token: "markdown.superscript",
        },
        {
            foreground: "bfaca4",
            token: "markdown.abbr",
            fontStyle: "italic",
        },
        {
            foreground: "4fc1e9",
            token: "markdown.link",
        },
        {
            foreground: "f7b733",
            token: "markdown.insert",
        },
        {
            foreground: "29ffc6",
            token: "markdown.mark",
        },
        //---------------Other colors------------------
        {
            foreground: "969896",
            token: "comment",
        },
        {
            foreground: "eeeeee",
            token: "keyword.operator.class",
        },
        {
            foreground: "eeeeee",
            token: "constant.other",
        },
        {
            foreground: "d54e53",
            token: "variable",
        },
        {
            foreground: "d54e53",
            token: "entity.name.tag",
        },
        {
            foreground: "d54e53",
            token: "entity.other.attribute-name",
        },
        {
            foreground: "d54e53",
            token: "meta.tag",
        },
        {
            foreground: "e78c45",
            token: "constant.numeric",
        },
        {
            foreground: "e78c45",
            token: "constant.language",
        },
        {
            foreground: "e78c45",
            token: "support.constant",
        },
        {
            foreground: "e78c45",
            token: "constant.character",
        },
        {
            foreground: "e78c45",
            token: "variable.parameter",
        },
        {
            foreground: "e78c45",
            token: "punctuation.section.embedded",
        },
        {
            foreground: "e78c45",
            token: "keyword.other.unit",
        },
        {
            foreground: "e7c547",
            token: "entity.name.class",
        },
        {
            foreground: "e7c547",
            token: "entity.name.type.class",
        },
        {
            foreground: "e7c547",
            token: "support.type",
        },
        {
            foreground: "e7c547",
            token: "support.class",
        },

        {
            foreground: "b9ca4a",
            token: "constant.other.symbol",
        },
        {
            foreground: "b9ca4a",
            token: "entity.other.inherited-class",
        },
        {
            foreground: "b9ca4a",
            token: "markup.heading",
        },
        {
            foreground: "70c0b1",
            token: "keyword.operator",
        },
        {
            foreground: "70c0b1",
            token: "constant.other.color",
        },
        {
            foreground: "7aa6da",
            token: "entity.name.function",
        },
        {
            foreground: "7aa6da",
            token: "support.function",
        },
        {
            foreground: "7aa6da",
            token: "keyword.other.special-method",
        },
        {
            foreground: "c397d8",
            token: "keyword",
        },
        {
            foreground: "c397d8",
            token: "storage",
        },
        {
            foreground: "c397d8",
            token: "storage.type",
        },
        {
            foreground: "c397d8",
            token: "entity.name.tag.css",
        },
        {
            foreground: "ced2cf",
            background: "df5f5f",
            token: "invalid",
        },
        {
            foreground: "ced2cf",
            background: "82a3bf",
            token: "meta.separator",
        },
        {
            foreground: "ced2cf",
            background: "b798bf",
            token: "invalid.deprecated",
        },
    ],
    colors: {
        "editorIndentGuide.activeBackground": "#626772",
        "editor.background": "#131313",
        "editor.foreground": "#ABB2BF",
        "editor.lineHighlightBackground": "#99BBFF0A",
        "editor.selectionBackground": "#3E4451",
        "editorCursor.foreground": "#528BFF",
        "editor.findMatchHighlightBackground": "#528BFF3D",
        "editorGroup.background": "#21252B",
        "editorGroup.border": "#181A1F",
        "editorGroupHeader.tabsBackground": "#21252B",
        "editorIndentGuide.background": "#ABB2BF26",
        "editorLineNumber.foreground": "#636D83",
        "editorLineNumber.activeForeground": "#ABB2BF",
        "editorWhitespace.foreground": "#ABB2BF26",
        "editorRuler.foreground": "#ABB2BF26",
        "editorHoverWidget.background": "#21252B",
        "editorHoverWidget.border": "#181A1F",
        "editorSuggestWidget.background": "#21252B",
        "editorSuggestWidget.border": "#181A1F",
        "editorSuggestWidget.selectedBackground": "#2C313A",
        "editorWidget.background": "#21252B",
        "editorWidget.border": "#3A3F4B",
        "list.activeSelectionBackground": "#2C313A",
        "list.activeSelectionForeground": "#D7DAE0",
        "list.focusBackground": "#2C313A",
        "list.hoverBackground": "#2C313A66",
        "list.highlightForeground": "#D7DAE0",
        "list.inactiveSelectionBackground": "#2C313A",
        "list.inactiveSelectionForeground": "#D7DAE0",
        "scrollbarSlider.background": "#4E566680",
        "scrollbarSlider.activeBackground": "#747D9180",
        "scrollbarSlider.hoverBackground": "#5A637580",
    },
}

export default theme;