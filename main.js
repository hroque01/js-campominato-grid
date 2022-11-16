
// dichiaro il contenitore
const container = document.querySelector(".grid_container")

// dichiaro il pulsante
const btn = document.querySelector(".btn")


// creo la griglia con un ciclo

for ( i = 1; i < 100; i++ ) {

    btn.addEventListener("click",

        function (){
            let nuovoElemento = createBox();
            nuovoElemento.addEventListener("click",

            function () {
                nuovoElemento.classList.toggle("clicked");
            }
        
        )

        container.appendChild(nuovoElemento)
    })
    

   

    

    
};

function createBox() {

    // creo un elemento div
    const mioElemnt = document.createElement('div');
    mioElemnt.innerHTML = `${[i]}`
    
    // aggiungo la classe box
    mioElemnt.classList.add('box');

    // lo metto nel dom
    return mioElemnt;


};
