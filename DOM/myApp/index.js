const form = document.forms["form"];
console.log(form)
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const passWord = document.getElementById('passWord').value;
    const email = document.getElementById('email').value;

    const divTag = document.createElement("div");
    const pTag = document.createElement("p");
    divTag.appendChild(pTag)


  

const object = {
        firstName: firstName,
        lastName : lastName,
        userName : userName,
        password: passWord,
        email: email
    }
    
async function postJSON(data) {
  console.log(data);
    try {
      const response = await fetch("http://localhost:9191/todolist/register", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
        pTag.textContent = result.data
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  postJSON(object);

    form.appendChild(divTag)


});
