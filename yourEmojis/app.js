// Grab the emojiContainer div and store it in a variable. Log it to the console
const emojiContainer = document.getElementById('emoji-container')
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const pushBtn = document.getElementById('push-btn')
const emojiInput = document.getElementById('emoji-input')
const unshiftBtn = document.getElementById("unshift-btn")
const shiftBtn = document.getElementById('shift-btn')
const popBtn = document.getElementById('pop-btn')


for (let i = 0; i < myEmojis.length; i++){
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}


pushBtn.addEventListener('click', function(){
    if (emojiInput.value != null && emojiInput.value != ""){
        myEmojis.push(emojiInput.value)
        render()
    } 
})

unshiftBtn.addEventListener('click', function(){
    if (emojiInput.value != null && emojiInput.value != ""){
        myEmojis.unshift(emojiInput.value)
        render()
    } 
})

shiftBtn.addEventListener('click', function(){
    myEmojis.shift()
    render()
})

popBtn.addEventListener('click', function(){
    myEmojis.pop()
    render()
})

function render(){
    let listitems = ""
    for (let i = 0; i < myEmojis.length; i++){
        listitems += `<span>${myEmojis[i]}</span>`
    }
    emojiInput.value = ""
    emojiContainer.innerHTML = listitems
}



