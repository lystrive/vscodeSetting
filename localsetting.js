{
  // ========== Visuals ==========
  // "editor.cursorSmoothCaretAnimation": "on",
  "editor.fontFamily": "Input Mono, monospace",
  "editor.guides.bracketPairs": "active",
  "editor.lineNumbers": "interval",
  "editor.renderWhitespace": "boundary",
  "editor.fontSize": 14,
  "editor.minimap.enabled": false,
  "window.autoDetectColorScheme": true,
  "workbench.colorTheme": "GitHub Dark Default",
  "workbench.editor.tabActionLocation": "right",
  "workbench.fontAliasing": "antialiased",
  "workbench.list.smoothScrolling": true,
  "workbench.preferredDarkColorTheme": "Vitesse Dark",
  "workbench.preferredLightColorTheme": "GitHub Light",
  "workbench.sideBar.location": "left",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.tree.expandMode": "singleClick",
  "workbench.tree.indent": 10,
  "workbench.productIconTheme": "icons-carbon",

  // ========== codeLens ==========
  "editor.codeLens": true,
  "typescript.referencesCodeLens.enabled": true,
  "typescript.implementationsCodeLens.enabled": true,

  // ========== Editor ========== 
  "debug.onTaskErrors": "debugAnyway",
  "editor.wordSeparators": "`~!@#%^&*()=+[{]}\\|;:'\",.<>/?",
  "editor.find.addExtraSpaceOnTop": false,
  "editor.inlineSuggest.enabled": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.stickyScroll.enabled": true,
  "editor.hover.sticky": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "never",
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.simpleDialog.enable": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.untrackedChanges": "separate",
  "scm.diffDecorationsGutterWidth": 2,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.fontWeight": "300",
  "terminal.integrated.persistentSessionReviveProcess": "never",
  "terminal.integrated.tabs.enabled": true,
  "workbench.editor.closeOnFileDelete": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.perEditorGroup": true,
  // "workbench.editor.limit.value": 5,
  "search.exclude": {
    "**/*.snap": true,
    "**/*.svg": true,
    "**/.git": true,
    "**/.github": false,
    "**/.nuxt": true,
    "**/.output": true,
    "**/.pnpm": true,
    "**/.vscode": true,
    "**/.yarn": true,
    "**/assets": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/logs": true,
    "**/node_modules": true,
    "**/out/**": true,
    "**/package-lock.json": true,
    "**/pnpm-lock.yaml": true,
    "**/public": true,
    "**/temp": true,
    "**/yarn.lock": true,
    "**/CHANGELOG*": true,
    "**/LICENSE*": true,
  },

  // ==========  Global Level Config, needs to put in User Settings ========== 
  "window.dialogStyle": "custom",
  "window.nativeTabs": true, // this is great, macOS only
  "window.title": "${rootName}", // this make tabs more readable
  "window.titleBarStyle": "custom",
  "extensions.autoUpdate": "onlyEnabledExtensions",

  // ========== Extension configs ========== 
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.triggerExpansionOnTab": false,

  "errorLens.enabledDiagnosticLevels": [
    "warning",
    "error"
  ],
  "errorLens.excludeBySource": [
    "cSpell",
    "Grammarly",
    "eslint"
  ],

  // ESLint config: https://github.com/antfu/eslint-config
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.quiet": true,
  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    // "json",
    // "jsonc",
    "yaml",
    "toml"
  ],

  // "github.copilot.enable": {
  //   "*": true,
  //   "markdown": true,
  //   "plaintext": false,
  // },

  "cSpell.allowCompoundWords": true,
  "cSpell.language": "en,en-US",
  "cSpell.userWords": [
    "antfu",
    "forex",
    "iconify",
    "inplace",
    "Nums",
    "nuxt",
    "nuxtjs",
    "pinia",
    "Qrcode",
    "vant",
    "Vitesse",
    "vueuse"
  ],

  "css.lint.hexColorLength": "ignore",

  "gitlens.codeLens.authors.enabled": false,
  "gitlens.codeLens.enabled": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "gitlens.menus": {
    "editor": {
      "blame": false,
      "clipboard": true,
      "compare": true,
      "history": false,
      "remote": false
    },
    "editorGroup": {
      "blame": true,
      "compare": false
    },
    "editorTab": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": true
    },
    "explorer": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": true
    },
    "scm": {
      "authors": true
    },
    "scmGroup": {
      "compare": true,
      "openClose": true,
      "stash": true
    },
    "scmGroupInline": {
      "stash": true
    },
    "scmItem": {
      "clipboard": true,
      "compare": true,
      "history": true,
      "remote": false,
      "stash": true
    }
  },

  "i18n-ally.autoDetection": false,
  "i18n-ally.displayLanguage": "en",
  "i18n-ally.ignoredLocales": [],

  // "iconify.annotations": true,
  // "iconify.inplace": true,

  "svg.preview.mode": "svg",

  // I only use Prettier for manually formatting
  "prettier.enable": false,
  "prettier.printWidth": 200,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "diffEditor.hideUnchangedRegions.enabled": true,
}
