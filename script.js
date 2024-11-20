const emailList = document.getElementById('email-list');
const button = document.getElementById('button-emails');


function generateEmails() {

    emailList.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data.response);
                emailList.innerHTML += `<li class="style-type mt-3">${result.data.response}</li>`;
            })
    }
}

generateEmails();

button.addEventListener('click', () => {
    generateEmails();
});
