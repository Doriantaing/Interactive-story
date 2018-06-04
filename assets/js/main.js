var dom = {
    firstPage: document.querySelector('.firstPage'),
    buttonStart: document.querySelector('.firstPage-button'),
    broom: document.querySelector('.firstPage-broom'),
    gender: document.querySelector('.gender'),
    genderImg: document.querySelectorAll('.gender-img'),
    house: document.querySelector('.house'),
    houses: document.querySelectorAll('.--houses'),
    story: document.querySelector('.story'),
    storyContainer: document.querySelector('.story-container'),
    storyTitle: document.querySelector('.story-title'),
}


function smoothScroll(section) {
    section.scrollIntoView({
        behavior: 'smooth',
    })
}



// Button Start 

dom.buttonStart.addEventListener('click', function () {
    document.querySelector('.firstPage-container').style.animation = "opacity 2s forwards";
    dom.broom.style.transform = "rotate(-20deg) translateX(1500px)";
    setTimeout(function () {
        smoothScroll(dom.gender);
    }, 2000);
});






// Gender Img


for (let i = 0; i < dom.genderImg.length; i++) {
    hoverInGender(i);
    hoverOutGender(i);
    dom.genderImg[i].addEventListener('click', function () {
        smoothScroll(dom.house);
        storageGender(i);
        animHouses();
    });
}



function storageGender(a) {
    if (dom.genderImg[a].dataset.gender === "male") {
        localStorage.setItem('gender', 'male');
    } else if (dom.genderImg[a].dataset.gender === "female") {
        localStorage.setItem('gender', 'female');
    }
}

function hoverInGender(a) {
    dom.genderImg[a].addEventListener('mouseover', function () {
        dom.genderImg[a].style.transform = 'scale(1.2)';
        if (dom.genderImg[a].dataset.gender === "male") {
            dom.genderImg[a].style.fill = "#0033c9";
        } else if (dom.genderImg[a].dataset.gender === "female") {
            dom.genderImg[a].style.fill = "#ff2acc";
        }
    });
}

function hoverOutGender(a) {
    dom.genderImg[a].addEventListener('mouseout', function () {
        dom.genderImg[a].style.transform = 'scale(1)';
        dom.genderImg[a].style.fill = "#fff";
    });
}


function animHouses() {
    var lineDrawing = anime({
        targets: '.house-anim',
        strokeDashoffset: [anime.setDashoffset, 0],
        strokeWidth: 4,
        easing: 'easeInOutSine',
        duration: 2500,
        delay: function (el, i) {
            return i * 250
        },
        direction: 'forwards',
        fillOpacity: 1,
    });
}




// Houses 




for (let i = 0; i < dom.houses.length; i++) {
    hoverInHouses(i);
    hoverOutHouses(i);
    dom.houses[i].addEventListener('click', function () {
        smoothScroll(dom.story);
        houseStorage(i);
        appelData();
        
    });
}



function houseStorage(a) {
    if (dom.houses[a].dataset.house === "slytherin") {
        localStorage.setItem('house', 'slytherin');
    } else if (dom.houses[a].dataset.house === "ravenclaw") {
        localStorage.setItem('house', 'ravenclaw');
    } else if (dom.houses[a].dataset.house === "gryffindor") {
        localStorage.setItem('house', 'gryffindor');
    } else if (dom.houses[a].dataset.house === "hufflepuff") {
        localStorage.setItem('house', 'hufflepuff');
    }
}


function hoverInHouses(hello) {
    dom.houses[hello].addEventListener('mouseover', function () {
        dom.houses[hello].style.transform = 'scale(1.3)';
    });

}

function hoverOutHouses(goodbye) {
    dom.houses[goodbye].addEventListener('mouseleave', function () {
        dom.houses[goodbye].style.transform = 'scale(1)';
    });
}


const dataStory = 'assets/js/textData.json';


function appelData() {


    fetch(dataStory)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'slytherin') {
                addName(data.gender.man.intro , data.gender.man.slytherin.title);
                addText(data.gender.man.slytherin.description);
            } 
            
            else if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'ravenclaw') {
                addName(data.gender.man.intro , data.gender.man.ravenclaw.title);
                addText(data.gender.man.ravenclaw.description);
            } 
            
            else if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'gryffindor') {
                addName(data.gender.man.intro , data.gender.man.gryffindor.title);
                addText(data.gender.man.gryffindor.description);
            } 
            
            else if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'hufflepuff') {
                addName(data.gender.man.intro , data.gender.man.hufflepuff.title);
                addText(data.gender.man.hufflepuff.description);
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'slytherin') {
                addName(data.gender.woman.intro , data.gender.woman.slytherin.title);
                addText(data.gender.woman.slytherin.description);
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'ravenclaw') {
                addName(data.gender.woman.intro , data.gender.woman.ravenclaw.title);
                addText(data.gender.woman.ravenclaw.description);
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'gryffindor') {
                addName(data.gender.woman.intro , data.gender.woman.gryffindor.title);
                addText(data.gender.woman.gryffindor.description);
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'hufflepuff') {
                addName(data.gender.woman.intro , data.gender.woman.hufflepuff.title);
                addText(data.gender.woman.hufflepuff.description);
            }
            
        })
}

function animText(){
   dom.storyTitle.style.animation = 'opacity2 8s';
   document.querySelector('.story-hero').style.animation = 'opacity2 10s';
   setTimeout(function(){
       dom.storyContainer.style.opacity = '0';
   }, 6000);
}


function addName(gender,house) {
    dom.storyTitle.innerHTML = gender;
    var title = document.createElement('h4');
    title.classList.add('story-hero');
    title.innerHTML = house;
    dom.storyContainer.appendChild(title);
    animText();
}

function addText(descrip){
    var p = document.createElement('p');
    p.classList.add('story-content');
    p.innerHTML = descrip;
    dom.story.appendChild(p);
    setTimeout(function(){
        p.style.opacity = '1';
        document.body.style.overflowY('scroll');
    }, 8000);
}