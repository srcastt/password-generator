const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
            "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
            "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
            "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/" 
];
// store here in array both password
let passWords = [ '' , '']

// to get random index generate
function getRandomPass(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}
// to achive 15 digit long password
function generatedPass(){
    let password = ''
    for(let i = 0; i < 15; i++){
        password += getRandomPass()
    }
    return password
}
//onclick button to genrate password
function randomPassword() {
    passWords[0] = generatedPass();
    passWords[1] = generatedPass();
    password1El.textContent = passWords[0];
    password2El.textContent = passWords[1];
}



            

      