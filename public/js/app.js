console.log('Client side javascript file is loaded!');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then(data => {
//         console.log(data);
//     })
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'loading...';
    messageTwo.textContent = '';
    fetch(`http://localhost:3001/weather?address=${location}`).then(response => {
        response.json().then(({ error, location, forecast }) => {
            if (error) {
                return messageOne.textContent = error;
            }

            messageOne.textContent = location;
            messageTwo.textContent = forecast;
        })
    });
})