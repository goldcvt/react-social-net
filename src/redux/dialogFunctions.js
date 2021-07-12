export let addMessage = (messages, messageText) => {
    let _id = messages[messages.length-1].msgId + 1;

    messages.push({
        msgId: _id,
        text: messageText,
        toMe: false
    })
}

export let typingMessage = (curMessage, text) => {
    curMessage.text = text;
}