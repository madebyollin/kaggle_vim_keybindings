function enable_vim(e) {
    e.CodeMirror.options.keyMap = "vim";
    e.CodeMirror.options.showCursorWhenSelecting = "vim";
}

window.addEventListener("load", () => {
    // loop to poll for window.CodeMirror being available
    // so we can then modify window.CodeMirror by importing vim keymap js file
    let handle = window.setInterval(() => {
        if (!window.CodeMirror) {
            // not loaded yet... keep trying!
            return;
        }
        let s = document.createElement("script");
        s.onload = () => {
            // once the vim keymap is available...
            // vimify all existing CodeMirror elements
            document.querySelectorAll(".CodeMirror").forEach(enable_vim);
            // salt the earth
            window.CodeMirror.defaults.keyMap = "vim";
            window.CodeMirror.defaults.showCursorWhenSelecting = "vim";
        };
        s.src = document.querySelector("#_autovimjs").dataset.keyMapSrc;
        document.body.appendChild(s);
        // load succeeded, stop trying
        window.clearInterval(handle);
    }, 1000);
    // global swap of esc and shift-esc behavior
});
