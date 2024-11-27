import fetchDataObj from "../data/fetchData.js";

const card = async () => {
    try {
        const [itemsList] = await Promise.all([fetchDataObj.notebooks]);
        console.log('Fetched data:', itemsList); // Log the fetched data
        if (!Array.isArray(itemsList.result)) {
            throw new Error('Data is not an array');
        }
        return itemsList.result.map((items, index) => `
            <li class="col-sm-12 col-md-6 col-lg-4 my-4">
                <article class="p-2 card">
                    <div class="card-header bg-light border-none text-center">
                        <h3>${items.title} - #${index + 1}</h3>
                    </div>
                    <div class="card-container">
                        <img src="${items.mediaEndpoint.img !== "" ? (items.mediaEndpoint.img):('assets/images/futurama.png')}" alt="imagem do card" class="character__img rounded"/>
                    </div>
                    <div class="card-footer border-none text-center">
                        <p>Character Occupation: <br/><strong>${items.author}</strong></p>
                    </div>
                </article>
            </li>
        `).join(''); // Join the array into a single string
    } catch (error) {
        console.error('Error fetching data:', error);
        return '';
    }
};

export default card;