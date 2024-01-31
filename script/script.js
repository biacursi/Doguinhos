const caoImg = document.getElementById("cao-img");
const URL = "https://dog.ceo/api/breeds/image/random";

async function gerarOutro() {
try {
       const resp = await fetch(URL);
       const random = await resp.json();

       if (random.status != "success"){
        throw new Error();
       }
    
       caoImg.src = random.message;
            
    }

 catch (error) {
    alert("Houve um erro no processamento!");
}}

gerarOutro();