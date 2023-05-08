let pText = document.querySelector(".boxP");
let boxButton = document.querySelector(".get");

const theQuotes = ["'All the gods, all the heavens, all the hells are within you'" ,
     "'The greatest glory in living lies not in never falling, but in rising every time we fall.'" ,
     "'The way to get started is to quit talking and begin doing'",
    "'Your time is limited, so don't waste it living someone else's life'",
    "'Ogbooon Sodiki'",
    "' Jigan Jigan ese mi o de le '"
]

boxButton.addEventListener('click', function(){
    pText.textContent = theQuotes[Math.floor(Math.random()*theQuotes.length)]
})