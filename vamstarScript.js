/* For publication data */

const publicationDate = document.querySelector('.field-content .lbl-licitacao:nth-child(1)').childNodes[1].textContent;

/* For bidding date */ 

const biddingDate = document.querySelector('.field-content .lbl-licitacao:nth-child(19)').childNodes[1].textContent;

/* For object */
const object = document.querySelector('.field-content>p:nth-child(6)').innerText;

/* For link */
let links = document.querySelectorAll('.field-content>table .field--type-image>a');

link = [];

for (let i=0; i<links.length; i++){
     x = links[i].getAttribute('href');
     link.push(x);
}

console.log(` Publication Date: ${publicationDate} \n Bidding date: ${biddingDate} \n Object: ${object} \n Link: ${link} `);
