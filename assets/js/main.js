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
    music: document.querySelector('.backgroundMusic')
}


function smoothScroll(section) {
    section.scrollIntoView({
        behavior: 'smooth',
    })
}



// Button Start 

dom.buttonStart.addEventListener('click', function(){
    firstPageAnim();
}); 

function firstPageAnim(){
    document.querySelector('.firstPage-container').style.animation = "opacity 2s forwards";
    dom.broom.style.transform = "rotate(-20deg) translateX(1500px)";
    setTimeout(function () {
        smoothScroll(dom.gender);
    }, 2000);
}




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
        callData();
        dom.music.src = 'assets/HarrySoundtrack/LeavingHogwarts.mp3';
        console.log(dom.music);
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


function callData() {


    fetch(dataStory)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'slytherin') {
                addName(data.gender.man.intro , data.gender.man.slytherin.title);
                firstText(data.gender.man.slytherin.firstText);
                secondText(data.gender.man.slytherin.secondText);
                endText();
                survey();
        
            } 
            
            else if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'ravenclaw') {
                addName(data.gender.man.intro , data.gender.man.ravenclaw.title);
                firstText(data.gender.man.ravenclaw.firstText);
                secondText(data.gender.man.ravenclaw.secondText);
                endText();
                survey();
            } 
            
            else if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'gryffindor') {
                addName(data.gender.man.intro , data.gender.man.gryffindor.title);
                firstText(data.gender.man.gryffindor.firstText);
                secondText(data.gender.man.gryffindor.secondText);
                endText();
                survey();
            } 
            
            else if (localStorage.getItem('gender') === 'male' && localStorage.getItem('house') === 'hufflepuff') {
                addName(data.gender.man.intro , data.gender.man.hufflepuff.title);
                firstText(data.gender.man.hufflepuff.firstText);
                secondText(data.gender.man.hufflepuff.secondText);
                endText();
                survey();
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'slytherin') {
                addName(data.gender.woman.intro , data.gender.woman.slytherin.title);
                firstText(data.gender.woman.slytherin.firstText);
                secondText(data.gender.woman.slytherin.secondText);
                endText();
                survey();
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'ravenclaw') {
                addName(data.gender.woman.intro , data.gender.woman.ravenclaw.title);
                firstText(data.gender.woman.ravenclaw.firstText);
                secondText(data.gender.woman.ravenclaw.secondText);
                endText();
                survey();
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'gryffindor') {
                addName(data.gender.woman.intro , data.gender.woman.gryffindor.title);
                firstText(data.gender.woman.gryffindor.firstText);
                secondText(data.gender.woman.gryffindor.secondText);
                endText();
                survey();
            } 
            
            else if (localStorage.getItem('gender') === 'female' && localStorage.getItem('house') === 'hufflepuff') {
                addName(data.gender.woman.intro , data.gender.woman.hufflepuff.title);
                firstText(data.gender.woman.hufflepuff.firstText);
                secondText(data.gender.woman.hufflepuff.secondText);
                endText();
                survey();
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

function firstText(descrip){
    var first = document.createElement('p');
    first.classList.add('story-firstContent');
    first.innerHTML = descrip;
    dom.story.appendChild(first);
    setTimeout(function(){
        first.style.transition = '4s';
        first.style.opacity = '1';
    }, 8000);
}

function secondText(descrip){
    var second = document.createElement('p');
    second.classList.add('story-secondContent');
    second.innerHTML = descrip;
    dom.story.appendChild(second);
    setTimeout(function(){
        document.querySelector('.story-firstContent').style.opacity = '0';
        second.style.transition ='4s';
        second.style.opacity = '1';
    }, 16000);
}

function endText(){
    var end = document.createElement('p');
    end.classList.add('story-endText');
    end.innerHTML = "The End";
    dom.story.appendChild(end);
    setTimeout(function(){
        document.querySelector('.story-secondContent').style.opacity = '0';
        end.style.transition ='4s';
        end.style.opacity = '1';
    }, 24000);
}

function survey(){
    var surveyContainer = document.createElement('div');
    surveyContainer.classList.add('story-surveyContainer');
    dom.story.appendChild(surveyContainer);

    var survey = document.createElement('h4');
    survey.classList.add('story-surveyTitle');
    survey.textContent = "Did you found it interesting ?";
    surveyContainer.appendChild(survey);

    var buttonYes = document.createElement('a');
    buttonYes.classList.add('story-surveyButton');
    buttonYes.href = "index.html";
    buttonYes.textContent = "Yes";
    surveyContainer.appendChild(buttonYes);


    var buttonNo = document.createElement('a');
    buttonNo.classList.add('story-surveyButton');
    buttonNo.href = "index.html";
    buttonNo.textContent = "No";
    surveyContainer.appendChild(buttonNo);

    buttonYes.addEventListener('click',function(){
        console.log("caca");
    })


    setTimeout(function(){
        document.querySelector('.story-endText').style.opacity = '0';
        surveyContainer.style.transition = "4s";
        surveyContainer.style.opacity = "1";
    }, 30000);
}

