console.log('added');

let btnVerify = document.querySelector('.btn');

let alps = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alps2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alpsCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let alpsCap2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let nums = [1,2,3,4,5,6,7,8,9,0]
let nums2 = [1,2,3,4,5,6,7,8,9,0]

let rand1 = Math.floor(Math.random()*alps.length);
let rand2 = Math.floor(Math.random()*alps2.length);
let rand3 = Math.floor(Math.random()*alpsCap.length);
let rand4 = Math.floor(Math.random()*alpsCap2.length);
let rand5 = Math.floor(Math.random()*nums.length);
let rand6 = Math.floor(Math.random()*nums2.length);

let randVal1 = alps[rand1]
let randVal2 = alps2[rand2]
let randVal3 = alpsCap[rand3]
let randVal4 = alpsCap2[rand4]
let randVal5 = nums[rand5]
let randVal6 = nums2[rand6]

let captchaValue = randVal6 + randVal3 + randVal4 + randVal2 + randVal6 + randVal1
let captchaText = document.querySelector('.captchaText');
let captchaInput = document.querySelector('#captchaInput');
captchaText.innerHTML = captchaValue

btnVerify.addEventListener('click', ()=>{
    if (captchaInput.value == captchaValue){
        window.alert('verified')
    }
    else{
        window.alert('Try Again')
    }
})


