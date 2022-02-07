let apiKey = "1469f7b3-d881-48da-9b6d-dace291b3d79";

fetch(`https://api-translate.systran.net/translation/supportedLanguages?key=${apiKey}`, {
	method: "GET",
	body: JSON.stringify()
	
	}).then((response) => 
	response.json().then ((data)=> {

	let matable = new Array;

	for (const tec in data.languagePairs) {						//langue à traduire

		let parent = document.querySelector("#monselect");
		let element = document.createElement("option");



		// On test voir si on a une entrée dans le tableau
		if( matable[ `${data.languagePairs[tec].target}` ] == `${data.languagePairs[tec].target}` ){

			// Ici il existe, on fait rien

		}else{

			// Ici il existe Pas

			// on le met dans le tableau (notre preuve de passage ^^)
			matable[ `${data.languagePairs[tec].target}` ] = `${data.languagePairs[tec].target}`;
			// On fait le push
			element.setAttribute("valeur",`${data.languagePairs[tec].target}`);
			let templat = `${data.languagePairs[tec].target}`
			element.innerHTML = templat;
			element.classList.add("langATranslat");
			parent.appendChild(element);

		}



	}

	let matable2 = new Array;
    for (const tec in data.languagePairs) {						//langue de traduction

		let parent = document.querySelector("#langAtraduire");
		let element = document.createElement("option");
		if( matable2[ `${data.languagePairs[tec].target}` ] == `${data.languagePairs[tec].target}` ){

			// Ici il existe, on fait rien

		}else{

			// Ici il existe Pas

			// on le met dans le tableau (notre preuve de passage ^^)
			matable2[ `${data.languagePairs[tec].target}` ] = `${data.languagePairs[tec].target}`;
			// On fait le push
			element.setAttribute("valeur",`${data.languagePairs[tec].target}`);
			let templat = `${data.languagePairs[tec].target}`
			element.innerHTML = templat;
			element.classList.add("langATranslat");
			parent.appendChild(element);

		}
	}

	})
	).catch(err => console.log('Erreur : ' + err))


/* 	if (data.languagePairs[tec].target != document.querySelector("option").value) {
		
	} else {
		
	} */