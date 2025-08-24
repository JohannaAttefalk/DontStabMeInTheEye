document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('changeButton');
  btn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.style.setProperty('background-color', '#e0dbd1', 'important')
    });
  });
});