let carouselArr = [];

class Carousel {

    constructor(imagem, texto, pagina) {
        this.imagem = imagem;
        this.texto = texto;
        this.pagina = pagina;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;

            const tagsLegenda = document.querySelectorAll('.legenda-carrossel');

            arr.forEach((slide, index) => {
                if (tagsLegenda[index]) {
                    if (slide.pagina && slide.pagina !== "#") {
                        tagsLegenda[index].innerHTML = `${slide.texto} <a href="${slide.pagina}">Confira aqui.</a>`;
                    } else {
                        tagsLegenda[index].innerHTML = slide.texto;
                    }
                }
            });

            Carousel.Next();
            
            
            Carousel.ResetTimer();

          
            Carousel.ConfigManualClicks();

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        let idDoRadio = "radio" + (Carousel._sequence + 1);
        
        const radioElement = document.getElementById(idDoRadio);
        if (radioElement) {
            radioElement.checked = true;
        }

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }

   
    static ResetTimer() {
        if (Carousel._interval) {
            clearInterval(Carousel._interval); 
        }
       
        Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);
    }

  
    static ConfigManualClicks() {
        for (let i = 1; i <= Carousel._size; i++) {
            const radioElement = document.getElementById("radio" + i);
            
            if (radioElement) {
               
                radioElement.addEventListener('change', function() {
                    
                    
                    Carousel._sequence = i;
                    if (Carousel._sequence >= Carousel._size) {
                        Carousel._sequence = 0;
                    }

                   
                    Carousel.ResetTimer();
                });
            }
        }
    }
};


carouselArr.push(new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"));
carouselArr.push(new Carousel("imagem_2.jpg", "Ford a nossa história", "#"));
carouselArr.push(new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"));

Carousel.Start(carouselArr);