const btn = document.getElementById("calculator")

btn.addEventListener("click", function () {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    if (height == "" || weight == "") {
        alert("please fill the input fields")
        return
    }
    height = height / 100
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(3)

    document.querySelector("#result").innerHTML = BMI


    let status = ""
    if (BMI < 16) {
        status = "Severe Thin"
    } else if (BMI > 16 && BMI < 17) {
        status = "Moderate Thin"
    } else if (BMI > 17 && BMI < 18.5) {
        status = "mild Thin"
    } else if (BMI > 18.5 && BMI < 25) {
        status = "Normal"
    } else if (BMI > 25 && BMI < 30) {
        status = "Over weight"
    } else if (BMI > 30 && BMI < 35) {
        status = "Obese class I"
    } else if (BMI > 35 && BMI < 40) {
        status = "Obese class II"
    } else if (BMI > 40) {
        status = "Obese class III"
    }
    document.querySelector(".comment").innerHTML = `comment : you are <span>${status}</span>`
})

