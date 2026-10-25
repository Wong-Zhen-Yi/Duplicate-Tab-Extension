async function duplicateCurrentTab(tab) {
  try {
    // Commands may omit the tab. Limit the fallback to the focused window.
    if (!Number.isInteger(tab?.id) || tab.id < 0) {
      [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    }

    if (Number.isInteger(tab?.id) && tab.id >= 0) {
      // Use native duplication to preserve the tab's navigation history.
      await chrome.tabs.duplicate(tab.id);
    }
  } catch (error) {
    console.error("Could not duplicate the current tab:", error);
  }
}

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "duplicate-tab") {
    return duplicateCurrentTab(tab);
  }
});

chrome.action.onClicked.addListener(duplicateCurrentTab);
