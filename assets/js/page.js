var savedName = localStorage.getItem('name-input');
var userAge = document.querySelector('#user-age');
var userGender = document.querySelector('#user-gender');
var userNationality = document.querySelector('#user-nationality');

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

window.onload = () => {
    getUserAge(savedName);
    getUserGender(savedName);
    getUserNationality(savedName);
};

