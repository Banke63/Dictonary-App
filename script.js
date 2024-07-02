const session = document.querySelector('#year');
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getWordinfo(form.elements[0].value);
})

const getWordinfo =async (word)=>{
    
        result.innerHTML = "Fatching data..."
    const response  = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    const definitions = data[0].meanings[0];
    result.innerHTML = `<p><strong>Word: </strong>${data[0].word}</p>`;
    result.innerHTML += `<p class="partsOfSpeech">${data[0].meanings[0].partOfSpeech}</p>`;
    result.innerHTML += `<p><strong>Definition: </strong>${definitions.definitions[0].definition}</p>`;

    
    result.innerHTML += `<p><strong>Example: </strong>${definitions.definitions[0].example}</p>`;
    result.innerHTML += `<p><strong>Antonyms:</strong></p>`

    if(definitions.antonyms.length === 0){  
        result.innerHTML += `<span>Not Found</span>`
    }else{
        for(let i=0; i<definitions.antonyms.length; i++){
            result.innerHTML += `<li>${definitions.antonyms[i]}</li>`
        }
        
    }


    result.innerHTML += `<p><strong>Synonyms:</strong></p>`

    if(definitions.synonyms.length === 0){  
        result.innerHTML += `<span>Not Found</span>`
    }else{
        for(let i=0; i<definitions.synonyms.length; i++){
            result.innerHTML += `<li>${definitions.synonyms[i]}</li>`
        }
        
    }

    result.innerHTML += `<audio controls src="${data[0].phonetics[0].audio}"></audio>`

}
   


























// footer year section 
let day = new Date();
let year = day.getFullYear();
session.innerHTML = year-1+"-"+year;
