//create the user constructor
//email,password,first name, last name, age, address, phone number, payment, color
function User(email, password, first, last, age, address, phoneNumber, payment, color){
    this.email= email;
    this.password= password;
    this.firstName= first;
    this.lastName= last;
    this.age= age;
    this.address= address;
    this.phoneNumber= phoneNumber;
    this.payment= payment;
    this.color= color;

}

//2) get the values from the inputs
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhoneNumber = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");



//3) register function
function register(){
    


    //3.1) create the object using the constructor
    let user = new User(inputEmail.val(), inputPassword.val(), inputFirstName.val(), inputLastName.val(), inputAge.val(), inputAddress.val(), inputPhoneNumber.val(), inputPayment.val(), inputColor.val() );
    
    
    //3.2 display the obj on the console
    console.log(user);
    //3.3 create a btn on the register.html and trigger the register function

}



