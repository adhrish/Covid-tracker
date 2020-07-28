function scrollHeader() {
	const ele = document.getElementsByClassName('header-items');
	const logo = document.getElementById("logo-image");
	const header = document.getElementById("header");
	if(document.body.scrollTop>=80) {
		header.style.height="3.5vw";
		logo.style.height="3vw";
		logo.style.width ="3vw";
		for(let i=0;i<ele.length;i++) {
			ele[i].classList.add("header-items-scrolled"); 
		}
	}
	else {
		header.style.height="7vw";
		logo.style.height="6vw";
		logo.style.width ="6vw";
		for(let i=0;i<ele.length;i++) {
			ele[i].classList.remove("header-items-scrolled"); 
		}
	}
} 

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

//  to disable the legend
function legend() {
	let bro = document.getElementById("legend");
	bro.children[0].classList.toggle('enabled');
}


function search(input) {	
		
		fetch('https://api.covid19india.org/data.json').then(
			response => response.json()
		).then(
			response => { 
				console.log(input.target.value);

				for(let i = 0 ; i<response.statewise.length; i++){
					if(input.target.value === response.statewise[i].state) {
						// const bro = document.getElementById("search-result");
						// bro.classList.add('enabled-search');

						document.getElementById("search-result").style.height = "37vw";
						document.getElementById("search-result").style.opacity = '1';


						const statename = document.getElementById("state-name");
						statename.innerHTML = response.statewise[i].state;

						if(response.statewise[i].active>10000) {
							statename.classList.add('darkred');
						}
						

						var searchResult= document.getElementById("search-results-cards");
						searchResult.innerHTML = 	`<div class="search-cards">
														<div class="card-text heading-semibold-1vw-RedRoseBold darkred">Confirmed</div>
														<div class="card-value heading-semibold-25vw-RedRoseBold darkred">${response.statewise[i].confirmed}</div>	
													</div>
													<div class="search-cards">
														<div class="card-text heading-semibold-1vw-RedRoseBold blue">Active</div>
														<div class="card-value heading-semibold-25vw-RedRoseBold blue">${response.statewise[i].active}</div>	
													</div>
													<div class="search-cards">
														<div class="card-text heading-semibold-1vw-RedRoseBold darkgreen">Recovered</div>
														<div class="card-value heading-semibold-25vw-RedRoseBold darkgreen">${response.statewise[i].recovered}</div>	
													</div>
													<div class="search-cards">
														<div class="card-text heading-semibold-1vw-RedRoseBold darkgrey">Deceased</div>
														<div class="card-value heading-semibold-25vw-RedRoseBold darkgrey">${response.statewise[i].deaths}</div>	
													</div>`

					
					}
				}
			}
		).catch(
			response => console.log("error")
		)
	}


















