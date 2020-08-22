var s = document.createElement("script");
s.id = "_autovimjs";
// load our script, which runs within page context rather than extension context
s.src = chrome.extension.getURL("./autovim.js");
// store path to vim keymap as data attribute so autovim.js can load it at the right moment
s.dataset.keyMapSrc = chrome.extension.getURL("./keymap.vim.js");
(document.head || document.documentElement).appendChild(s);
