gsap.to('.heading', {x:500, duration:3,
    onUpdate: function () {
        if (window.innerWidth <1200) {
            gsap.to('.heading', {x:0})
        }
        else if (window.innerWidth <500) {
            gsap.to('.heading', {x:0})
        }
        else  gsap.to('.heading', {x:500})
    }

    

})

gsap.to('.headingTwo', {x:-100, duration:3,
    onUpdate: function () {
        window.innerWidth <1200 ? gsap.to('.headingTwo', {x:10}) : gsap.to('.heading', {x:100})
    }
})

let move = 200;



gsap.from ('.item', {duration:3, y: function (i){
    
    if (i%2===0) return move;
    else return -move;
    
},

scrollTrigger: {
    trigger: ".item",
    start: "top 80%",
    end: "bottom 20%",
     }

});

gsap.to('.textPrinted', {
     text: 'Compare products',
     duration: 3,
     repeat: -1,
     repeatDelay: .7,
     yoyo:true,
     scrollTrigger: {
        trigger: ".item",
        start: "top 80%",
        end: "bottom 20%",
     }
     
     
    
})







const button = document.querySelector('#btn');

button.addEventListener('click', calculate);

const buttonInterest = document.querySelector('#addInterest');

buttonInterest.addEventListener('click', showInterest);


function showInterest(e) {
    e.preventDefault();
    interest.style.display = "block";
}

function calculate (e) {
    e.preventDefault();

    const investment = document.querySelector('#amount').value;
    
    const interest = document.querySelector('#interest').value;

    if (investment==="") {
        alert("Your total investment is 0. Or you didn't fill out the form");
    }

    else if (isNaN(investment)) {
        alert("You should fill numbers only");
    }
    let investmentPerSpouse = investment / 2;

    let interestPerSpouse = Math.round(investment*interest / 2);

    let resultPerPerson = investmentPerSpouse + interestPerSpouse;

    
    document.querySelector('#dividedAmount').textContent = investmentPerSpouse;
    document.querySelector('#dividedInterest').textContent = interestPerSpouse;
    document.querySelector('#dividedResult').textContent = resultPerPerson;

}


const buttonPerSpouse = document.querySelector('#btn2');

buttonPerSpouse.addEventListener('click', (e, investment)=> {
    e.preventDefault();
    const years = document.querySelector('#years').value; 
    
    const investments = document.querySelector('#amount').value;
    const interests = document.querySelector('#interest').value;


    let investmentPerSpouseD = (investments*years)/2;

    let resultPerSpouseD = ((investments*Math.pow((+interests+1), +years))+(investments*((Math.pow((+interests+1), +years)-1)/(+interests))))/2;
    
    let interestPerSpouseD = resultPerSpouseD - investmentPerSpouseD;

    investmentPerSpouseD = investmentPerSpouseD.toFixed(2);

    interestPerSpouseD = interestPerSpouseD.toFixed(2);

    resultPerSpouseD = resultPerSpouseD.toFixed(2);

    
    
    if (years<0) {
        alert("You should fill years of investment");
    }

    else if (+interests=== 0) {

        document.querySelector('#dividedInv').textContent = investmentPerSpouseD;
        document.querySelector('#dividedInt').textContent = 0;
        document.querySelector('#dividedRes').textContent = investmentPerSpouseD;

    }

    
    else {

        document.querySelector('#dividedInv').textContent = investmentPerSpouseD;
        document.querySelector('#dividedInt').textContent = interestPerSpouseD;
        document.querySelector('#dividedRes').textContent = resultPerSpouseD;
    }

    
    
    
})














