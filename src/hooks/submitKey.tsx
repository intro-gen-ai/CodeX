// encode the key then store it in storage

export function submitKey() {
    const input = document.getElementById('key');
    if (input) {
        // @ts-ignore
        const {value} = input;
        const encodedValue = encode(value);

        chrome.storage.local.set({ 'openai-key': encodedValue });
    }

}

function encode (input : string) {
    return window.btoa(input);
}
