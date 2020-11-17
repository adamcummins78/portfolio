// Form Validation for contact box

function validateForm() {
    var x = document.forms["contactForm"]["visitor_name"].value;
    var y = document.forms["contactForm"]["visitor_lastName"].value;
    var z = document.forms["contactForm"]["visitor_email"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    else if (y == "") {
        alert("Last name must be filled out");
        return false;
      }
    else if (z == "") {
        alert("Email must be filled out");
        return false;
      }
  }


//   Projects (Placeholders)

const projects = [
    {
    title: "Jimbo's Shrimp",
    language: 'HTML, CSS, JavaScript',
    image: 'jimbo.jpg'
    },
    {
    title: 'Magic 8 Ball',
    language: 'JavaScript, some HTML & CSS',
    image: 'eight.jpg'
    },
    {
    title: 'Application',
    language: 'Primarily C#',
    image: 'app.jpg'
    },
    {
    title: 'Lottery Numbers Generator',
    language: 'JavaScript, some HTML & CSS',
    image: 'lotto.jpg'
    },
    {
    title: 'Realtor Website',
    language: 'HTML, CSS, JavaScript',
    image: 'realtor.jpg'
    }
];

const list = document.querySelector('#viewProject'); 

let listOfProjects = '';

for (let i = 0; i < 5; i++ ) {
    let project = projects[i];
    listOfProjects += 
    `
    <div class="jsProjects">
        <h2>${project.title}</h2>
        <h3>${project.language}</h3>
        <div>
          <a href="#"><img class="jsPics" src="images/${project.image}" alt="Preview of project"></a>
        </div>
    </div> 
    `; 
}

list.innerHTML = listOfProjects;