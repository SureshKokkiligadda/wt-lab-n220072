const websiteName = "Profile Card Website";
let experience = 2;

console.log(websiteName);
console.log(experience);

document.getElementById("info").innerText =
    `${websiteName} | Experience: ${experience} years`;

experience = 3;
console.log("Updated experience:", experience);


function changeRole() {
    document.getElementById("role1").innerText = "Senior Software Engineer";
    alert("Role Updated!");
}

const greetUser = function(name) {
    return "Welcome " + name;
};

const addExperience = (exp) => exp + 1;

console.log(greetUser("User"));
console.log(addExperience(3));

const userProfile = {
    name: "Suresh",
    role: "Software Engineer",
    status: "Active",

    updateStatus: function(newStatus) {
        this.status = newStatus;
        return this.status;
    }
};

console.log(userProfile.name);     
console.log(userProfile["role"]);   

document.getElementById("updateBtn").addEventListener("click", () => {
    const confirmUpdate = confirm("Do you want to update status?");
    
    if (confirmUpdate) {
        const newStatus = prompt("Enter new status:");
        userProfile.updateStatus(newStatus);
        alert("Status Updated!");
        document.getElementById("info").innerText =
            `Status: ${userProfile.status}`;
    }
});

const buttons = document.querySelectorAll(".details");

buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "green";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "#007bff";
    });

    btn.addEventListener("click", () => {
        alert("Profile details clicked!");
    });
});
