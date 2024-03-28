// searchinput
// searchbtn

const dictionary = (word)=>{
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a0c575bd2dmshb370b2026f49c9fp10b1ecjsn2efa27696d8e',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
  .then(response => response.json())
  .then((response) => {
    
    
    
    wordheading.innerHTML="Meaning of word :" + response.word
    definition.innerHTML=response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");;


})
  .catch(error => console.error(err));
}

searchbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    dictionary(searchinput.value)

})




