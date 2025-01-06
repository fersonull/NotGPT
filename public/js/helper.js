export function getter(id) {
    return document.getElementById(id);
}

export function clickEvent(target, callback) {
    target.onclick = (e) => {
        callback(e);
    }
}

export function onLoad(callback) {
    document.addEventListener('DOMContentLoaded', (e) => {
        console.log(e)
        callback(e);
    })
}

export function clearForm(target) {
    target.value = null;
}

export function createUserChat(parent, content) {
    const div = document.createElement('div');
    div.classList.add('chat-list', 'user');

    div.innerHTML = `
                <p id="output">${content}</p>
                <span class="icon material-symbols-rounded">
                    content_copy
                </span>
            `

    parent.appendChild(div);
}

export function createResponse(parent, content) {
    const div = document.createElement('div'); 
    div.classList.add('chat-list', 'response');

    div.innerHTML = `
                <p id="output">${content}</p>
                <span id="copy" class="icon material-symbols-rounded">
                    content_copy
                </span>
            `

    parent.appendChild(div);
}

export function showLoader(parent) {
    const id = Math.floor(100000 * Math.random(90000))
    const div = document.createElement('div');
    div.classList.add('loader', 'shown');
    div.setAttribute('id', id);
 
   
    div.innerHTML = `<div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>`

    parent.appendChild(div);

    return id;
}

export function letterAnimation(target, parent) {
    const words = target.split(' ');
    let currentInd = 0;

    const effectInterval = setInterval(() => {
        parent.innerText += (currentInd === 0 ? '' : ' ') + words[currentInd++];

        if(currentInd === words.length) {
            clearInterval(effectInterval);
        }
    }, 75)

}

export function enterSubmit(target, callback) {
    target.addEventListener('keydown', e => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            callback(e);
        }
    })
}