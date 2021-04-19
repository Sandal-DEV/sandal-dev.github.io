class ChatDiv {
    constructor() {
        this._chatWrapDiv = document.createElement('div');
        this._profileDiv = document.createElement('div');
        this._iconI = document.createElement('i');
        this._userDiv = document.createElement('div');
        this._userNameDiv = document.createElement('div');
        this._chatMessageDiv = document.createElement('div');
        this._chatBubbleDiv = document.createElement('div');
        this._chatTimeDiv = document.createElement('div');

        this.setChatDiv();
    }

    setChatDiv() {
        this._chatWrapDiv.append(this._profileDiv);
        this._profileDiv.append(this._iconI);
        this._chatWrapDiv.append(this._userDiv);
        this._userDiv.append(this._userNameDiv);
        this._userDiv.append(this._chatMessageDiv);
        this._chatMessageDiv.append(this._chatBubbleDiv);
        this._chatMessageDiv.append(this._chatTimeDiv);

        this._chatWrapDiv.classList.add('live-chat');
        this._profileDiv.classList.add('user-profile');
        this._profileDiv.classList.add('user-border');
        this._iconI.classList.add('em');
        this._userDiv.classList.add('user-chat');
        this._userNameDiv.classList.add('user-name');
        this._chatMessageDiv.classList.add('chat');
        this._chatBubbleDiv.classList.add('chat-bubble');
        this._chatTimeDiv.classList.add('chat-time');
    }
}

function renderChat(messagesJSON) {
    document.querySelector('.live-chat-room').innerHTML="";
    messagesJSON.forEach(chat => {

        let chatDiv = new ChatDiv();
        chatDiv._chatWrapDiv.id = chat.type;
        chatDiv._iconI.classList.add(chat.icon);
        chatDiv._userNameDiv.innerHTML = chat.user;
        chatDiv._profileDiv.style.borderColor = chat.color;
        chatDiv._chatBubbleDiv.innerHTML = chat.message;
        chatDiv._chatTimeDiv.innerHTML = chat.time;

        document.querySelector('.live-chat-room').append(chatDiv._chatWrapDiv);
    })
}

function scrollBottom() {
    const chatWrapDiv = document.querySelector('.live-chat-room');
    chatWrapDiv.scrollTop = chatWrapDiv.scrollHeight;
}

function setChatHeight() {
    let headerHeight = 16//document.querySelector('.header-container').offsetHeight;
    let chatTitleHeight = document.querySelector('.live-chat-titlebar').offsetHeight;
    let chatInputHeight = document.querySelector('.live-chat-input').offsetHeight;
    let chatContainerHeight = window.innerHeight - headerHeight;//document.documentElement.clientHeight;
    console.log(headerHeight);
    console.log(chatTitleHeight);
    console.log(chatInputHeight);
    console.log(chatContainerHeight);

    return (chatContainerHeight - chatTitleHeight - chatInputHeight) + "px";
}

function setChatContainerHeight() {
    let headerHeight = 16//document.querySelector('.header-container').offsetHeight;
    let chatContainerHeight = window.innerHeight - headerHeight;//document.documentElement.clientHeight;
    return chatContainerHeight + "px";
}

function registerResizeCallback() {
    window.addEventListener("resize", resized);
}

function resized() {
    DotNet.invokeMethodAsync("Sandal.WASM", 'OnBrowserResize');//.then(data => data);
}

// function resizeChatHeight() {
//     let chatContainerHeight = window.innerHeight;
//     let chatTitleHeight = document.querySelector('.live-chat-titlebar').offsetHeight;
//     let chatInputHeight = document.querySelector('.live-chat-input').offsetHeight;

//     let chatRoomHeight = chatContainerHeight - chatTitleHeight - chatInputHeight;

//     window.addEventListener('resize', function() {
//         chatContainerDiv.style.height = chatContainerHeight + "px";
//         chatRoomDiv.style.height = chatRoomHeight + "px";
//     }, true);
//     //scrollBottom();
// }

// // function init() {
// //     renderChat(messages);
// //     setChatHeight();
// //     scrollBottom();
// // }

// // init();