# Duplicate Tab

Press **Alt+Shift+D** while Chrome or Microsoft Edge is focused to duplicate
the current tab. The browser opens and selects the duplicate. You can also
click the extension's toolbar button.

Uses the browser's native tab duplication API, including navigation history.
No popup, website access, extra permissions, or build step is needed.

## Install

1. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this folder:
   `C:\Users\Wong Remote Box\Documents\GitHub\Duplicate Tab Extension`
4. Open a tab and press **Alt+Shift+D**.

If you already have an older Duplicate Tab extension installed, disable or
remove that copy to avoid a shortcut conflict.

## If the shortcut does not work

Open `chrome://extensions/shortcuts` or `edge://extensions/shortcuts`.
Find **Duplicate Tab**, and assign **Alt+Shift+D** to **Duplicate the current tab**.
If another extension uses that shortcut, clear its assignment first.
Keep the shortcut scoped to **In Chrome** or **In Microsoft Edge**, if shown.

After editing these files, click the extension's **Reload** button on the
extensions page. Existing shortcut assignments may need to be set manually.

## API references

- [Chrome Commands API](https://developer.chrome.com/docs/extensions/reference/api/commands)
- [Chrome Tabs API](https://developer.chrome.com/docs/extensions/reference/api/tabs)
