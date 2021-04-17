// const sendBtn = document.querySelector('.chat-send-btn'),
// const chatText = document.querySelector('.chat-textarea');

function activeBtn() {
    const sendBtn = document.querySelector('.chat-send-btn');
    const chatText = document.querySelector('.chat-textarea');
    if (chatText.value !== "") {
        sendBtn.id = "activate";
        sendBtn.disabled = false;
    } else if (chatText.value == "") {
        sendBtn.id = "";
        sendBtn.disabled = true;
    }
}

function enterHandler(event) {
    const keyCode = event.keyCode;
    const sendBtn = document.querySelector('.chat-send-btn');
    const chatText = document.querySelector('.chat-textarea');

    if (keyCode == 13) {
        if (!event.shiftKey) {
            event.preventDefault();
            DotNet.invokeMethodAsync("Sandal.WASM", 'OnSend');//.then(data => data);
            chatText.value = "";
        } else {
            chatText.value += "\r\n";
        }
    }
}

function getChatValue() {
    const chatText = document.querySelector('.chat-textarea');
    const target = chatText.value;
    chatText.value = "";
    activeBtn();
    return target;
}

// 전송 버튼 클릭 시 실행되는 action
// blazor로 메세지 전송
// function send() {
//     let chatTextValue = chatText.value;
//     console.log(chatTextValue);
// }

// function init() {
//     window.onload = function() {
//         document.getElementById("abcdefgh").onclick = send();//.querySelector('.chat-send-btn').onclick = send;
//     }
// }

// init();