// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Customer Information ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name :       "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var streetaddresslabel = document.createElement('label'); // Create Label for Street Address Field
streetaddresslabel.innerHTML = "Street Address : "; // Set Field Labels
createform.appendChild(streetaddresslabel);

var inputelement = document.createElement('input'); // Create Input Field for Street Address
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "streetaddress");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : "; // Set Field Labels
createform.appendChild(emaillabel);

var inputelement = document.createElement('input'); // Create Input Field for E-mail
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "demail");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var phonelabel = document.createElement('label'); // Create Label for phone Field
phonelabel.innerHTML = "Your Phone Number : ";
createform.appendChild(phonelabel);

var inputelement = document.createElement('input'); // Create Input Field for phone number
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dphone");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);
 
var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Special Instructions : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Update Customer Information");
createform.appendChild(submitelement);
