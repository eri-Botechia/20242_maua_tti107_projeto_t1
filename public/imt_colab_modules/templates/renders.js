export const renderSlashPage = (data) => {
    const dataArray=data.result
    return (`
    <div class="container">
        <div class="row">
            ${dataArray.map(data => `
                <div class="col-12" id="${data.id}">
                    <h1>${data.mediaEndpoint.img}</h1>
                    <button id="likeBtn">
                        ${data.likes}
                        <i class="fas fa-like"></i>
                    </button>
                </div>
            `).join('')}
        </div>
    </div>
    `);
};