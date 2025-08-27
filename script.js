
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}



const heardCount = getElement('heard-count');
const heard = document.getElementsByClassName('heard-image')
let count = 0;
for (const imag of heard) {
    imag.addEventListener('click', function () {
        count++;
        getElement('heard-count').innerText = count;
    })
}



const copyBtn = document.getElementsByClassName('copy-btn');
let copyCount = 0;
for (const copy of copyBtn) {
    copy.addEventListener('click', function () {

        copyCount++;
        const helpNum = copy.parentNode.parentNode.children[3].innerText;
        const copyText = getElement('copy-button-count');
        alert(`Copy Done ${helpNum}`)

        getElement('copy-button-count').innerText = copyCount;

        navigator.clipboard.writeText(helpNum);
    })
}

let coins = 100;
const coinDisplay = getElement('coin-count');
coinDisplay.innerText = coins;

const buttonBtn = document.getElementsByClassName('button-btn');
// console.log(buttonBtn)
for (const btn of buttonBtn) {
    btn.addEventListener('click', function () {
        const cardTitle = btn.parentNode.parentNode.childNodes[3].innerText
        const helpNumber = btn.parentNode.parentNode.childNodes[7].innerText;


        if (coins < 20) {
            alert("Not enough coins! You need at least 20 coins to make a call.");
            return;
        }
        alert(`Calling ${cardTitle} ${helpNumber}...`);

        coins = coins - 20;
        coinDisplay.innerText = coins;

        const cardContainer = getElement('card-container');
        const newCard = document.createElement('div');

        const time = new Date();
        const timeString = time.toLocaleTimeString();

        newCard.innerHTML = `
        <div class="flex justify-between items-center p-3 bg-[#FAFAFA]  rounded-lg">
                            <div>
                                <h1 class="sm:text-lg text-[16px] text-[#111111]inter-font font-semibold">${cardTitle}</h1>
                                <p class="text-lg text-[#5C5C5C] hind-font ">${helpNumber}</p>
                            </div>
                           <p class=" hind-font text-[#111111] text-lg">${timeString}</p>
                        </div>
        `
        cardContainer.append(newCard)
        console.log(cardContainer)
        console.log(helpNumber)
        console.log(cardTitle);
    })

    const clearBtn = getElement('clear-btn').addEventListener('click', function () {
        getElement('card-container').innerHTML = '';
    })


    // console.log(button.innerText)
}