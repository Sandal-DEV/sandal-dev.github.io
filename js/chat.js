// <-- Mockdata
const messages = {
    "messages": [
    {
        "user": "오늘만 사는 곰",
        "type": "first-type",
        "icon": "em em-bear",
        "color": "#C1694F",
        "message": "하이루",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "second-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "방가방가",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "third-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "아니 이게 뭐야? 진짜 대박이다 너무 좋은거 아님??? 세상세상 조와~~~",
        "time": "10:46"
    },
    {
        "user": "귀여운 고슴도치",
        "type": "sixth-type",
        "icon": "em em-hedgehog",
        "color": "#774517",
        "message": "ㅋㅋㅋㅋㅋ안녕안녕",
        "time": "10:47"
    },
    {
        "user": "오늘만 사는 곰",
        "type": "first-type",
        "icon": "em em-bear",
        "color": "#C1694F",
        "message": "하이루",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "second-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "방가방가",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "third-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "아니 이게 뭐야? 진짜 대박이다 너무 좋은거 아님??? 세상세상 조와~~~",
        "time": "10:46"
    },
    {
        "user": "귀여운 고슴도치",
        "type": "sixth-type",
        "icon": "em em-hedgehog",
        "color": "#774517",
        "message": "ㅋㅋㅋㅋㅋ안녕안녕",
        "time": "10:47"
    },
    {
        "user": "오늘만 사는 곰",
        "type": "first-type",
        "icon": "em em-bear",
        "color": "#C1694F",
        "message": "하이루",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "second-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "방가방가",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "third-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "아니 이게 뭐야? 진짜 대박이다 너무 좋은거 아님??? 세상세상 조와~~~",
        "time": "10:46"
    },
    {
        "user": "귀여운 고슴도치",
        "type": "sixth-type",
        "icon": "em em-hedgehog",
        "color": "#774517",
        "message": "ㅋㅋㅋㅋㅋ안녕안녕",
        "time": "10:47"
    },
    {
        "user": "오늘만 사는 곰",
        "type": "first-type",
        "icon": "em em-bear",
        "color": "#C1694F",
        "message": "하이루",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "second-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "방가방가",
        "time": "10:46"
    },
    {
        "user": "내일이 없는 돌고래",
        "type": "third-type",
        "icon": "em em-dolphin",
        "color": "#3B88C3",
        "message": "아니 이게 뭐야? 진짜 대박이다 너무 좋은거 아님??? 세상세상 조와~~~",
        "time": "10:46"
    },
    {
        "user": "귀여운 고슴도치",
        "type": "sixth-type",
        "icon": "em em-hedgehog",
        "color": "#774517",
        "message": "ㅋㅋㅋㅋㅋ안녕안녕",
        "time": "10:47"
    },
]};
// -->

//const chatRoomDiv = document.querySelector('.live-chat-room');
//const chatContainerDiv = document.querySelector('.live-chat-container');
// const chatInputDiv = document.querySelector('.live-chat-input');
// const chatTitleDiv = document.querySelector('.live-chat-titlebar');

// class ChatDiv {
//     constructor() {
//         this._chatWrapDiv = document.createElement('div');
//         this._profileDiv = document.createElement('div');
//         this._iconI = document.createElement('i');
//         this._userDiv = document.createElement('div');
//         this._userNameDiv = document.createElement('div');
//         this._chatMessageDiv = document.createElement('div');
//         this._chatBubbleDiv = document.createElement('div');
//         this._chatTimeDiv = document.createElement('div');

//         this.setChatDiv();
//     }

//     setChatDiv() {
//         this._chatWrapDiv.append(this._profileDiv);
//         this._profileDiv.append(this._iconI);
//         this._chatWrapDiv.append(this._userDiv);
//         this._userDiv.append(this._userNameDiv);
//         this._userDiv.append(this._chatMessageDiv);
//         this._chatMessageDiv.append(this._chatBubbleDiv);
//         this._chatMessageDiv.append(this._chatTimeDiv);

//         this._chatWrapDiv.classList.add('live-chat');
//         this._profileDiv.classList.add('user-profile');
//         this._profileDiv.classList.add('user-border');
//         this._userDiv.classList.add('user-chat');
//         this._userNameDiv.classList.add('user-name');
//         this._chatMessageDiv.classList.add('chat');
//         this._chatBubbleDiv.classList.add('chat-bubble');
//         this._chatTimeDiv.classList.add('chat-time');
//     }
// }

// function renderChat(messagesJSON) {
//     //const chatList = messagesJSON;
//     document.querySelector('.live-chat-room').innerHTML="";
//     messagesJSON.forEach(chat => {

//         let chatDiv = new ChatDiv();
//         chatDiv._chatWrapDiv.id = chat.type;
//         chatDiv._iconI.className += chat.icon;
//         chatDiv._userNameDiv.innerHTML = chat.user;
//         chatDiv._profileDiv.style.borderColor = chat.color;
//         chatDiv._chatBubbleDiv.innerHTML = chat.message;
//         chatDiv._chatTimeDiv.innerHTML = chat.time;

//         document.querySelector('.live-chat-room').append(chatDiv._chatWrapDiv);
//     })
// }

// function scrollBottom() {
//     const chatWrapDiv = document.querySelector('.live-chat-room');
//     chatWrapDiv.scrollTop = chatWrapDiv.scrollHeight;
// }

// function setChatHeight() {
//     let chatContainerHeight = window.innerHeight;//document.documentElement.clientHeight;
//     let chatTitleHeight = document.querySelector('.live-chat-titlebar').offsetHeight;
//     let chatInputHeight = document.querySelector('.live-chat-input').offsetHeight;

//     return (chatContainerHeight - chatTitleHeight - chatInputHeight) + "px";
// }

// function setChatContainerHeight() {
//     let chatContainerHeight = window.innerHeight;//document.documentElement.clientHeight;
//     return chatContainerHeight + "px";
// }

// function registerResizeCallback() {
//     window.addEventListener("resize", resized);
// }

// function resized() {
//     DotNet.invokeMethodAsync("Sandal.WASM", 'OnBrowserResize').then(data => data);
// }

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