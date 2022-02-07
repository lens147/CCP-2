document.getElementById("switch").addEventListener('click', function invert(e)  {

	//On défini une variable temporaire
	//On attribu la valeur #monselect à la valeur temporaire
	let temp = document.querySelector("#langAtraduire").value;


	//On attribu la valeur de #langAtraduire à la valeur de langue
	document.querySelector("#langAtraduire").value = document.querySelector("#monselect").value;

	document.querySelector("#monselect").value = temp;

	//textarea

	let temp2= document.querySelector("#text").value;

	//même délire que plus haut
	document.querySelector("#text").value = document.querySelector("#trad").innerHTML;
	
	document.querySelector("#trad").innerHTML = temp2;

	//On enclanche le trigger du textarea
	

  });

  function darkMode() {
	  document.body.classList.toggle("dark-mode");
  }

  document.getElementById("darkThem").addEventListener('click', darkMode);

  function dayMode() {
	document.body.classList.toggle("day-mode");
}

document.getElementById("dayThem").addEventListener('click', dayMode);