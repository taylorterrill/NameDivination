var savedName = localStorage.getItem('name-input');
var userAge = document.querySelector('#user-age');
var userGender = document.querySelector('#user-gender');
var userNationality = document.querySelector('#user-nationality');
var userDefinition = document.querySelector('#urban');

const regionNames = new Intl.DisplayNames(
    ['en'], { type: 'region' }
);

function getUserAge(user) {
    var apiUrl = 'https://api.agify.io?name=' + user;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                // console.log(response);
                response.json().then(function (data) {
                    var ageReturn = data['age'];
                    userAge.textContent = "You are " + ageReturn + " years old."
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to agify.io');
        });
};

function getUserGender(user) {
    var apiUrl = 'https://api.genderize.io?name=' + user;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                // console.log(response);
                response.json().then(function (data) {
                    var genderReturn = data['gender'];
                    userGender.textContent = "You are " + genderReturn + ".";
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to genderize.io');
        });
};

function getUserNationality(user) {
    var apiUrl = 'https://api.nationalize.io?name=' + user;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                // console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    var nationalityReturn = data['country'][0]['country_id']
                    userNationality.textContent = "You are from " + regionNames.of(nationalityReturn) + ".";
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to genderize.io');
        });
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9651b0ef4mshe6dc6243ac9e0f6p19acc7jsn5b8609d0e4d2',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

function getUrbanDictionary(user) {
    var apiUrl = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + user;

    fetch(apiUrl, options)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    var definitionReturn = data['list'][0]['definition']
                    console.log(definitionReturn);
                    userDefinition.textContent = "According to the Urban Dictionary, this is what your name means: " + definitionReturn;
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to genderize.io');
        });
};

window.onload = () => {
    getUserAge(savedName);
    getUserGender(savedName);
    getUserNationality(savedName);
    getUrbanDictionary(savedName);
};

