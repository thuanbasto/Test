const btnAddLeft = document.querySelector(".btnAddLeft");
const btnAddRight = document.querySelector(".btnAddRight");
const saveAll = document.querySelector(".saveAll");
var data = [];
saveAll.addEventListener("click", () => {
    document.querySelectorAll(".cardSkill").forEach((cardSkill) =>{
        var listDetailSkill = cardSkill.children[1].getElementsByTagName("input");
        var detailSkills = [];
        for (let i = 0; i < listDetailSkill.length; i++) {
            console.log(listDetailSkill[i].value);
        }
        // var skill = {
        //     skill_ID : "1",
        //     skillName : cardSkill.children[1].value,

        // }
    })
})
function addSkill(el){
    var div = document.createElement("div");
    div.innerHTML = 
    "<input class='form-control' placeholder='Skill. Ex: Language, Technical, Exp'/>" +
    "<ul>" +
        "<li class='form-inline'>" +
            "<input id='detailSkill' class='mt-2 form-control mb-2 mr-sm-2' placeholder='Detail of skill'/>" +
            "<button id='deleteDetailSkill' onclick='deleteDetailSkill(this)' class='btn btn-danger'>X</button>" +
        "</li>" +
    "</ul>" +
    "<button id='submit' type='submit' class='btn btn-primary'>Save</button>" +
    "<button id='deleteSkill' onclick='deleteSkill(this)' class='ml-2 btn btn-danger'>Delete</button>" +
    "<button id='addDetailSkill' onclick='addDetailSkill(this)' class='ml-2 btn btn-success'>Add Detail</button>";
    div.classList += "cardSkill mb-3"
    el.parentElement.appendChild(div);
}

function deleteSkill(el){
    el.parentElement.remove();
}
function deleteDetailSkill(el){
    el.parentElement.remove();
}
function addDetailSkill(el){
    var div = el.parentElement.children;
    var li = document.createElement("li");
    li.classList += "form-inline" 
    li.innerHTML =
        "<input id='detailSkill' class='mt-2 form-control mb-2 mr-sm-2' placeholder='Detail of skill'/>" +
        "<button id='deleteDetailSkill' onclick='deleteDetailSkill(this)' class='btn btn-danger'>X</button>";
    div[1].appendChild(li);
}







// const span = document.querySelectorAll("span");
// span.forEach((i) => {
//     i.style.display ="none";
// })











// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirmPassword");
// const passwordErrorMatch = document.querySelector("#passwordErrorMatch");
// const passwordErrors = document.querySelector("#password\\.errors")

// const username = document.querySelector("#username");
// const usernameErrors = document.querySelector("#username\\.errors");
// const usernameErrorLength = document.querySelector("#usernameErrorLength");
// const usernameErrorRegex = document.querySelector("#usernameErrorRegex");

// const submit = document.querySelector("#submit");

// submit.disabled = true;
// usernameErrorLength.style.display = "none";
// usernameErrorRegex.style.display = "none";
// passwordErrorMatch.style.display = "none";
// password.value = "";
// confirmPassword.value = "";

// const enableSubmit = () => {
// 	if (usernameErrorLength.style.display == "none" 
// 		&& usernameErrorRegex.style.display == "none" 
// 			&& passwordErrorMatch.style.display == "none"){
// 		submit.disabled = false;
// 	} else {
// 		submit.disabled = true;
// 	}
// }

// username.addEventListener("keyup", () => {
// 	if (usernameErrors != null)
// 		usernameErrors.style.display = "none";
	
//     var nameRegex = /^[a-zA-Z1-9\-]+$/;
//     var validUsername = nameRegex.test(username.value);
    
//     if (validUsername === false){
//         usernameErrorRegex.style.display = "block";
//     } else {
//         usernameErrorRegex.style.display = "none";
//     }
//     if (username.value.length < 6){
//         usernameErrorLength.style.display = "block";
//     } else {
//         usernameErrorLength.style.display = "none";
//     }
    
//     enableSubmit();
// })
// password.addEventListener("keyup", () => {
// 	if (passwordErrors != null)
// 		passwordErrors.style.display = "none";
    
//     if (confirmPassword.value !== password.value && confirmPassword.value !== ""){
//     	passwordErrorMatch.style.display = "block";
//     } else {
//     	passwordErrorMatch.style.display = "none";
//     }
    
//     enableSubmit();
// })
// confirmPassword.addEventListener("keyup", () => {
// 	if (passwordErrors != null)
// 		passwordErrors.style.display = "none";
	
//     if (confirmPassword.value !== password.value){
//     	passwordErrorMatch.style.display = "block";
//     } else {
//     	passwordErrorMatch.style.display = "none";
//     }
    
//     enableSubmit();
// })

