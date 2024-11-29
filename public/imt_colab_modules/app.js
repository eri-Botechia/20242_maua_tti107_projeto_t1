import {templates} from './templates/templates.js';



const switchContent = (templates) => {
    const resultHTML = document.getElementById('result');
    const globalRoot = window.location.href
    const endpoint = (window.location.href.includes('/pages/')?(window.location.href.slice('/pages/').pop()):"/")
    

    switch (endpoint) {
        case "/":
            document.resultHTML = templates.slash;
            break;
    
        default:
            break;
    }
}