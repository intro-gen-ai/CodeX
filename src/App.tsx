import React, {useEffect, useState} from "react";
import DescriptionPage from "./pages/DescriptionPage";
import KeyPage from "./pages/KeyPage";
import {generateCompletionAction} from "./hooks/generateDescription";

enum Page {
    KeyPage,
    DescriptionPage
}
function App() {
    const [page, setPage] = useState<Page>(Page.KeyPage);

    const checkKey = async () => {
        chrome.storage.local.get(['openai-key'], (result) => {
            if (result['openai-key']) {
                setPage(Page.DescriptionPage);
            } else {
                setPage(Page.KeyPage);
            }
        })
    }

    const renderView = () => {
        switch (page) {
            case Page.DescriptionPage:
                return <DescriptionPage checkKey={checkKey}/>
            case Page.KeyPage:
                return <KeyPage checkKey={checkKey} />
            default:
                return <KeyPage checkKey={checkKey} />
        }
    }

    useEffect(() => {
        chrome.contextMenus.create({
            id: 'context-run',
            title: 'Generate code description',
            contexts: ['selection'],
        });
        chrome.contextMenus.onClicked.addListener(generateCompletionAction);
    }, []);

    return (
        <div className="app">
            {renderView()}
        </div>
    );
}
export default App