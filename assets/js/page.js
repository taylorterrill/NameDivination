var savedName = localStorage.getItem('name-input');
var userAge = document.querySelector('#user-age');
var userGender = document.querySelector('#user-gender');
var userNationality = document.querySelector('#user-nationality');
var userDefinition = document.querySelector('#urban');

// the following lines convert the alpha 2 code to a country//

const regionNames = new Intl.DisplayNames(
    ['en'], { type: 'region' }
);

//accessing agify.io to get predicted user age

function getUserAge(user) {
    var apiUrl = 'https://api.agify.io?name=' + user;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var ageReturn = data['age'];
                    userAge.textContent = "You are " + ageReturn + " years old.";
                });
            } else {
                userAge.textContent = "We were unable to determine your age."; 
            }
        })
        .catch(function (error) {
            userAge.textContent = "We were unable to determine your age.";
        });
};

//accessing Genderize.io to get predicted user gender
function getUserGender(user) {
    var apiUrl = 'https://api.genderize.io?name=' + user;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var genderReturn = data['gender'];
                    userGender.textContent = "You are " + genderReturn + ".";
                });
            } else {
                userGender.textContent = "We were unable to determine your gender."; 
            }
        })
        .catch(function (error) {
            userGender.textContent = "We were unable to determine your gender."; 
        });
};

//accessing nationlize.io to get predicted user nationality

function getUserNationality(user) {
    var apiUrl = 'https://api.nationalize.io?name=' + user;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var nationalityReturn = data['country'][0]['country_id']
                    userNationality.textContent = "You are from " + regionNames.of(nationalityReturn) + ".";
                });
            } else {
                userNationality.textContent = "We were unable to determine your nationality."; 
            }
        })
        .catch(function (error) {
            userNationality.textContent = "We were unable to determine your nationality."; 
        });
};

// Provided on the online resource for the API (key)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9651b0ef4mshe6dc6243ac9e0f6p19acc7jsn5b8609d0e4d2',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

// Accessess unoficial UrbanDictionary API to get defintions

function getUrbanDictionary(user) {
    var apiUrl = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + user;

    fetch(apiUrl, options)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var definitionReturn = data['list'][0]['definition'];
                    userDefinition.textContent = "Acccording to the Urban Dictionary, this is what your name means: " + definitionReturn;
                });
            } else {
                userDefinition.textContent = "We were unable to determine a definition for your name."; 
            }
        })
        .catch(function (error) {
            userDefinition.textContent = "We were unable to determine a definition for your name."; 
        });
};

//Runs all of the functions once the page is loaded

window.onload = () => {
    // Checks to see if a name has been typed in the input bar
    if (savedName !== "")  {
        getUserAge(savedName);
        getUserGender(savedName);
        getUserNationality(savedName);
        getUrbanDictionary(savedName);
    }
};

