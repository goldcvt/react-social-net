export let newMessage = (messages, messageText) => {
    let _id = messages[messages.length-1].id;

    messages.push({
        id: _id,
        message: messageText,
        toMe: false
    })
}