//* Starting typescript


document.getElementById("resumeform")?.addEventListener("submit", function (event) {
    event.preventDefault();

    //^ GIVING TYPES
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillElement = document.getElementById("skills") as HTMLInputElement;

    //* ALL ELEMENT MAIN CONDITION
    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillElement.value;

      //* CREATIGN RESUME OUTPUT

      const resumeOutput = `
        <h2>Resume</h2>
        <hr>
        <p> ${name} </span></p>
        <p> ${email}</span></p>
        <p> ${phone}</span></p>

        <h3>Education</h3>
        <p> ${education}</p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable" > ${experience}</p>

        <h3>Skills</h3>
        <p> ${skills}</p>
        `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      }else{
        console.error("The resume output element is missing")
      }
    } else {
      console.error("one or more output elements are missing ");
    }
  });
