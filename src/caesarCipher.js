
function caesarCipher(text ,shift){
    let cipherText = "";
    for(let i = 0; i < text.length ; i++){
        if( text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 ){
            let code = text.charCodeAt(i) + shift
            if( code > 122){
                code -= 26;
                cipherText += String.fromCharCode(code);
            }else{
            cipherText += String.fromCharCode(code);
            }
        }
        else{
            cipherText += text[i];
        }
    }
    return cipherText;
}

export default caesarCipher;