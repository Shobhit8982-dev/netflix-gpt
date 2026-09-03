export const Validate = (emailRef,nameRef,passRef) => {
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailRef);

const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/.test(nameRef);

const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passRef)

if(!emailRegex)return "Email is not Valid"
if(!nameRegex)return "Name is not valid"
if(!passRegex)return "Password is not valid"

return null;

// const isValidEmail = emailRegex.test("user@example.com"); // true
// console.log(isValidEmail);
}  