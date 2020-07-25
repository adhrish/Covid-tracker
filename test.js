

function call() {

	const x = document.getElementById("table-plate");
	const cardsData=document.getElementById("card-plate");
	

	fetch('https://api.covid19india.org/data.json').then (
		function(response) {
			return response.json();
		}
		).then(
			function(response) {
				console.log(response);
				for(let i=1; i<response.statewise.length;i++) {
					const row = 	`<div id="data-row" >
										<div class="data paragraph-bold-1vw-OpenSans state-cell">${response.statewise[i].state}</div>
										<div class="data cell paragraph-bold-1vw-OpenSans">${response.statewise[i].confirmed}</div>
										<div class="data cell paragraph-bold-1vw-OpenSans">${response.statewise[i].active}</div>
										<div class="data cell paragraph-bold-1vw-OpenSans">${response.statewise[i].recovered}</div>
										<div class="data cell paragraph-bold-1vw-OpenSans">${response.statewise[i].deaths}</div>
									</div>`

					x.innerHTML+= row;
					
				} 
					const y = 	`<div class="card">
											<div class="card-heading heading-semibold-1vw-RedRoseBold darkred">
												Confirmed 
											</div>
											<div class="card-count heading-semibold-25vw-RedRoseBold darkred">${response.statewise[0].confirmed}</div>
										</div>
										<div class="card">
											<div class="card-heading heading-semibold-1vw-RedRoseBold blue">
												Active 
											</div>
											<div class="card-count heading-semibold-25vw-RedRoseBold blue">${response.statewise[0].active}</div>
										</div>
										<div class="card">
											<div class="card-heading heading-semibold-1vw-RedRoseBold darkgreen">
												Recovered 
											</div>
											<div class="card-count heading-semibold-25vw-RedRoseBold darkgreen">${response.statewise[0].recovered}</div>
										</div>
										<div class="card">
											<div class="card-heading heading-semibold-1vw-RedRoseBold darkgrey">
												Deceased 
											</div>
											<div class="card-count heading-semibold-25vw-RedRoseBold darkgrey">${response.statewise[0].deaths}</div>				
										</div>		`
					cardsData.innerHTML=y;
			}
		)
		.catch(
			function(error) {
				console.log(error);
			}
		)
}

function legend() {
	let bro = document.getElementById("legend");
	bro.children[0].classList.toggle('disabled');
}

