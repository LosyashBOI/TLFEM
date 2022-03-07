const INPUT = document.querySelector('.genderize__input');
const SUBMIT = document.querySelector('.genderize__submit')


function getResult(event) {
    const firstName = INPUT.value[0].toUpperCase() + INPUT.value.slice(1);
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    let json = fetch(url).then(response => response.json());
    json.then(data => alert(`${firstName} - ${data.gender}`));

    event.preventDefault();
}

SUBMIT.addEventListener('click', getResult);

