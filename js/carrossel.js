
//carousel

//Array storage class
let carouselArr = ["radio1", "radio2", "radio3"];

//class Carousel
class Carousel {

    constructor (imagem, texto, pagina) {
        this.imagem = imagem;
        this.texto = texto;
        this.pagina = pagina;
    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        let idDoRadio = carouselArr[Carousel._sequence];
        
    
        document.getElementById(idDoRadio).checked = true;

        
        Carousel._sequence++;


        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
};

Carousel.Start(carouselArr);
