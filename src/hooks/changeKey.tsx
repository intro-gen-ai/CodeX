// simply delete key from storage
export function changeKey () {
    chrome.storage.local.remove(['openai-key']);
}