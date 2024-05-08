

//form submission
const form = document.getElementById("form")
const contact = document.getElementById("contactlist")

form.addEventListener('submit',submission)

function submission(event) {


    event.preventDefault()
 
    //get form input value
  
  

    const nameinput = form['name'].value;
    const numberinput = form['number'].value;
    const pictureinput = form['picture'].value;



    //validation


    if (!pictureinput) {

        alert("picture is required")
        return
        
    }
    else if (!nameinput) {
        alert("name is required")
        return
        
    }
    else if (!numberinput) {
        alert("number is required")
        return
        
    }

    if (nameinput>20) {

        alert("name must be less than 20")
        return
        
    }

   
        
    

    const phoneNumberRegex = /^(?:\+\d{1,3})?(?:[\s-().]*\d){10,}$/;

    if (!phoneNumberRegex.test(numberinput)) {

        alert("phone number is invalid");
        return;
        
    }
   



    //create contact elements

    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = pictureinput;
    li.appendChild(img)

    const div = document.createElement("div")
    li.appendChild(div)

    const h3 = document.createElement("h3")
    h3.innerHTML = nameinput;
    div.appendChild(h3)

    const span = document.createElement("span")
    span.innerHTML = numberinput;
    div.appendChild(span);

    console.log(li)

    contact.appendChild(li)

    
}