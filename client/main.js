document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/compliment")
        .then(function (response) {
            const data = response.data;
            alert(data);

        });
    };
document.querySelector("#fortuneButton").onclick = function (){
    axios.get("http://localhost:4000/api/compliment/fortune")
        .then(function (res) {
        const data = res.data
        alert(data)
        })
    }

document.querySelector("#randomJoke").onclick = function (){
    axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(function (res) {
        const setup = (res.data.setup + res.data.punchline)
        alert(setup)
        })
    }

document.querySelector("#randomActivity").onclick = function (){
    axios.get("https://www.boredapi.com/api/activity")
        .then(function (res) {
        const setup = (res.data.activity)
        alert(setup)
        })
    }

    document.querySelector("#catFact").onclick = function (){
    axios.get("https://catfact.ninja/fact")
        .then(function (res) {
        const setup = (res.data.fact)
        alert(setup)
        })
    }
