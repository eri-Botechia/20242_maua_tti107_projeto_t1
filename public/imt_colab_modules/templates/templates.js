import dataPage from './dataPage.js';
import renderSlashPage from './slashPage.js';
const {dataSlash}= dataPage;


const templates ={
    slash: renderSlashPage(dataSlash),
}

export default templates;