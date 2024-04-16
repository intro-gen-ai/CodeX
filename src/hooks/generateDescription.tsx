import OpenAI from 'openai';

export async function generateCompletionAction (this: any, info : Object) {
    try {
        // @ts-ignore
        document.body.querySelector('#select-code').style.display = 'none';
        // @ts-ignore
        document.body.querySelector('#description').innerText = 'Generating Response...';

        // @ts-ignore
        const { selectionText } = info;
        const basePromptPrefix = "summarize the code below:\n";

        const baseCompletion = await generate(`${basePromptPrefix}${selectionText}`);

        // @ts-ignore
        document.body.querySelector('#description').innerText = baseCompletion.replace(/(\r\n|\n|\r)/gm, "");

    } catch (error) {
        console.log(error);
    }
}

async function generate (prompt : string) {
    const key: string = await getKey() as string;

    const openai: OpenAI = new OpenAI({
        apiKey: key,
        dangerouslyAllowBrowser: true,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature: 1,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response.choices[0].message.content;
}

function getKey() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['openai-key'], (result) => {
            if (chrome.runtime.lastError) {
                // Handle a storage error
                console.error('Error retrieving the API key:', chrome.runtime.lastError);
                reject(new Error('Failed to retrieve API key from storage.'));
            } else if (result['openai-key']) {
                // Decode and resolve the API key
                const decodedKey = window.atob(result['openai-key']);
                resolve(decodedKey);
            } else {
                // Key is not found, resolve with a substitution string or reject
                const substitutionKey = 'default-substitution-key';
                console.warn('API key not found, using substitution key.');
                resolve(substitutionKey);
            }
        });
    });
}