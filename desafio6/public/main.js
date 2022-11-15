const socket = io()

const div = document.getElementById('messages')
const btn = document.getElementById('enviar')
const inputNombre = document.getElementById('nombre')
const inputTexto = document.getElementById('texto')



btn.addEventListener('click', () => {
    console.log(inputNombre)
    const nombre = inputNombre.value
    const texto = inputTexto.value
    inputTexto.value = ''
    inputNombre.value = ''
    socket.emit('new-message', {
        user: nombre,
        text: texto,
        date: getNow()
    });
});
socket.on('messages', (messages) => {
    console.log('mensaje recibido')
    console.log(messages)
    div.innerHTML = messages.map(message => {

        if (message.user === inputNombre.value) {
            return `<div class="notification is-link is-light"
                style="text-align: justify; margin-left: 35px;     padding: 15px;
                border-radius: 20px;">
                    <div>
                    <p>${message.text}</p>
                    </div>
                    <div
                        style="text-align: end; font-style: italic; font-weight: 400"
                        class="has-text-dark">
                    ${message.user} - ${message.date}
                    </div>
            </div>`
        } else {
            return `<div
        class="notification is-primary is-light"
        style=" text-align: justify; margin-rigth:35px;     padding: 15px;
        border-radius: 20px;">
            <div>
            <p>${message.text}</p>
            </div>
            <div
            style="text-align: end; font-style: italic; font-weight: 400"
            class="has-text-dark"
            >
            ${message.user} - ${message.date}
            </div>
        </div>`
        }
    }).join("")
})


getNow = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}