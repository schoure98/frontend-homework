const formSubmit = (event) => {
	//empty form
	if (!fullName.value && !email.value) {
		console.warn("You must enter name and email to submit this form");
	}

	//valid form
	else {
		console.group("======== Form Submission ========");

		//full-name
		if (!fullName.value) {
			console.log(`Name: No Submission`);
		} else {
			console.log(`Name: ${fullName.value}`);
		}

		//email
		if (!email.value) {
			console.log(`Email: No Submission`);
		} else {
			console.log(`Email: ${email.value}`);
		}

		//registration status
		if (!registration.value) {
			console.log(`Registration Status: No Submission`);
		} else {
			console.log(`Registration Status: ${registration.value}`);
		}

		//courses
		const coursesTaken = [];
		courses.forEach((course) => {
			if (course.checked) {
				coursesTaken.push(course.value);
			}
		});
		if (coursesTaken.length == 0) {
			console.log(`Courses: No Submission`);
		} else {
			console.log(`Courses: ${coursesTaken}`);
		}

		//comments
		if (!comments.value) {
			console.log(`Comments: No Submission`);
		} else {
			console.log(`Comments: ${comments.value}`);
			console.groupEnd();
		}
	}
	event.preventDefault();
};

const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const registration = document.getElementById("registration");
const courses = document.getElementsByName("courses");
const comments = document.getElementById("comments");

form.addEventListener("submit", formSubmit);
