import card from '../templates/card.js';

const htmlList = document.getElementById('htmlList');

const render = async () => {
    document.addEventListener('DOMContentLoaded', async () => {
        const cardHTML1 = await card();
        htmlList.innerHTML += `<ul class="row justify-content-center">${cardHTML1}
        </ul>`;
    });
};

export default render;