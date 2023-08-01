let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
const ensembles = document.querySelector('.ensemble-cartes');
const ensembles_a = document.querySelector('.ensemble-cartes-a');
const rectangle = document.querySelector('.rectangle');
const img_kineo = document.querySelector('.image-kineo-img')
const img_mouveo = document.querySelector('.image-mouveo-img');
const img_osteo = document.querySelector('.image-osteo-img');
const cabinet = document.querySelector('.bloc-rencontrer-cabinet');
const telephone = document.querySelector('.bloc-rencontrer-telephone');
const email = document.querySelector('.bloc-rencontrer-email');
const cabinet_a = document.querySelector('.bloc-rencontrer-cabinet-a');
const telephone_a = document.querySelector('.bloc-rencontrer-telephone-a');
const email_a = document.querySelector('.bloc-rencontrer-email-a');
const form_cartes1 = document.querySelector('.form-cartes');
const massage = document.querySelector('.massage');
const marche = document.querySelector('.marche');
const coaching = document.querySelector('.coaching');
const image_osteo = document.querySelector('.image-osteo-osteo');
const forme = document.querySelector('.text-formes');

var path = window.location.pathname;
var page = path.split("/").pop();


toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})



window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (page == "index.html") {
        if (window.innerWidth >= 991){
            if (window.scrollY >= 400) {
                ensembles.classList.add('show');
            } 
            else{
                ensembles.classList.remove('show');
            }
        } else if (window.innerWidth >= 500){
            if (window.scrollY >= 10) {
                ensembles.classList.add('show');
            } 
            else{
                ensembles.classList.remove('show');
            }
        }
        else {
            if (window.scrollY >= 10) {
                ensembles.classList.add('show');
            } 
            else{
                ensembles.classList.remove('show');
            }
        }
        if (window.innerWidth >= 991) {
            if (window.scrollY >= 900) {
               img_kineo.classList.add('show');
            } 
            else{
                img_kineo.classList.remove('show');
            }
        } else if (window.innerWidth >= 500) {
            if (window.scrollY >= 700) {
                img_kineo.classList.add('show');
             } 
             else{
                 img_kineo.classList.remove('show');
             }
        } else {
            if (window.scrollY >= 900) {
                img_kineo.classList.add('show');
             } 
             else{
                 img_kineo.classList.remove('show');
             }
        }
        if (window.innerWidth >= 991){
            if (window.scrollY >= 1700) {
                img_mouveo.classList.add('show');
            } 
            else{
               img_mouveo.classList.remove('show');
            }   
        
            if (window.scrollY >= 2600) {
               img_osteo.classList.add('show');
            } 
            else{
               img_osteo.classList.remove('show');
            }
            if (window.scrollY >= 3400) {
                cabinet.classList.add('show');
                telephone.classList.add('show');
                email.classList.add('show');
            } 
            else{
               cabinet.classList.remove('show');
               telephone.classList.remove('show');
               email.classList.remove('show');
            }
        } else if (window.innerWidth >= 500) {
            if (window.scrollY >= 1300) {
                img_mouveo.classList.add('show');
            } 
            else{
               img_mouveo.classList.remove('show');
            }
            if (window.scrollY >= 2100) {
                img_osteo.classList.add('show');
             } 
             else{
                img_osteo.classList.remove('show');
             }
             if (window.scrollY >= 2700) {
                cabinet.classList.add('show');
                telephone.classList.add('show');
                email.classList.add('show');
            } 
            else{
               cabinet.classList.remove('show');
               telephone.classList.remove('show');
               email.classList.remove('show');
            }
        }else {
            if (window.scrollY >= 1400) {
                img_mouveo.classList.add('show');
            } 
            else{
               img_mouveo.classList.remove('show');
            }   
        
            if (window.scrollY >= 2300) {
               img_osteo.classList.add('show');
            } 
            else{
               img_osteo.classList.remove('show');
            }
            if (window.scrollY >= 2000) {
                cabinet.classList.add('show');
                telephone.classList.add('show');
                email.classList.add('show');
            } 
            else{
               cabinet.classList.remove('show');
               telephone.classList.remove('show');
               email.classList.remove('show');
            }
        }
    
        
    }
    if (page == "osteo.html") {
        if (window.innerWidth >= 500){
            if (window.scrollY >= 300) {
                image_osteo.classList.add('show')
            }
            else{
                image_osteo.classList.remove('show')
            }
        } else {
            if (window.scrollY >= 1000) {
                image_osteo.classList.add('show')
            }
            else{
                image_osteo.classList.remove('show')
            }
        }
    }
    if (page == "mouveo.html") {
        if (window.innerWidth >= 991) {
            if (window.scrollY >= 2700) {
                forme.classList.add('text-formes-on')
            }
            else{
                forme.classList.remove('text-formes-on')
            }
        }
        else if (window.innerWidth >= 500){
            if (window.scrollY >= 3200) {
                forme.classList.add('text-formes-on')
            }
            else{
                forme.classList.remove('text-formes-on')
            }
        } else{
            if (window.scrollY >= 3600) {
                forme.classList.add('text-formes-on')
            }
            else{
                forme.classList.remove('text-formes-on')
            }
        }
    }
    if (page == "kineo.html") {
        if (window.innerWidth >= 991){
            if (window.scrollY >= 400) {
                forme.classList.add('text-formes-on')
            }
            else{
                forme.classList.remove('text-formes-on')
            }
        }else if (window.innerWidth >= 500){
            if (window.scrollY >= 800) {
                forme.classList.add('text-formes-on')
            }
            else{
                forme.classList.remove('text-formes-on')
            }
        }
         else {
            if (window.scrollY >= 1400) {
                forme.classList.add('text-formes-on')
            }
            else{
                forme.classList.remove('text-formes-on')
            }
        }
    }
});

if (page == "mouveo.html") {
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 500){
            if (window.scrollY >= 800) {
                massage.classList.add('show');
                marche.classList.add('show');
                coaching.classList.add('show');
             } else{
                massage.classList.remove('show');
                marche.classList.remove('show');
                coaching.classList.remove('show');
             } 
        } else {
            if (window.scrollY >= 1200) {
                massage.classList.add('show');
             } else{
                massage.classList.remove('show');
             } 
             if (window.scrollY >= 1750) {
                marche.classList.add('show');
             } else{
                marche.classList.remove('show');
             } 
             if (window.scrollY >= 2050) {
                coaching.classList.add('show');
             } else{
                coaching.classList.remove('show');
             } 
        }
    })  
}

if (page == "index.html") {
    window.addEventListener('pageshow', () => {
        rectangle.classList.add('show');
    });
}

if (page == "kineo.html" || page == "mouveo.html" || page == "osteo.html") {
    window.addEventListener('pageshow', () => {
        form_cartes1.classList.add('show');
    });
}

if (page == "a-propos-de-nous.html") {
    window.addEventListener('pageshow', () => {
        cabinet_a.classList.add('show');
        telephone_a.classList.add('show');
        email_a.classList.add('show');
    });
}

if (page == "a-propos-de-nous.html") {
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 500){
            if (window.scrollY >= 400) {
                ensembles_a.classList.add('show');
            } 
            else{
                ensembles_a.classList.remove('show');
            }
        } 
        else {
            if (window.scrollY >= 700) {
                ensembles_a.classList.add('show');
            } 
            else{
                ensembles_a.classList.remove('show');
            }
        }
    })
}










if (page == "kineo.html" || page == "mouveo.html" || page == "a-propos-de-nous.html") {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
    
        showDivs(slideIndex += n);
    }

    function currentDiv(n) {
      showDivs(slideIndex = n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block"; 
    }
}


