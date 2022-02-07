document.querySelector('#text').addEventListener("keyup", function show(e) {
    let user_input = document.querySelector('#text');
    document.querySelector("#trad").innerText = user_input.value;

})

    let langue = navigator.language;
    let option = document.querySelector('#monselect_option');
    option.setAttribute('value', langue);
    option.innerHTML = langue;





    let langAt;

let traduction = function callback(langue, langAt) {

    langAt = document.querySelector("#langAtraduire").value;
    let query = document.querySelector("#text").value;
    let apiKey = "1469f7b3-d881-48da-9b6d-dace291b3d79";
    langue = document.querySelector("#monselect").value;

    let url = `https://api-translate.systran.net/translation/text/translate?key=${apiKey}&input=${query}&target=${langue}&source=${langAt}`;

    console.log(url);

    fetch(url, {
        method: "POST",
        body: JSON.stringify()
            
        })
        .then((response) => 
        response.json())
        .then ((data)=> {
            document.querySelector("#trad").innerText = data.outputs[0].output;
        })

    .catch(err => console.log('Erreur : ' + err))
}

document.querySelector('#monselect').addEventListener('change', traduction);
document.querySelector('#langAtraduire').addEventListener('change', traduction);
document.querySelector('#text').addEventListener('keyup', traduction);
document.querySelector('#switch').addEventListener('click', traduction);
document.querySelector('#switch').addEventListener('mousemove', traduction);
