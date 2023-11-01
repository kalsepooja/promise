const cl = console.log;

const formControl = document.getElementById('loginform');
const emailControl = document.getElementById('email');
const passwordControl = document.getElementById('password');

// kalse@gmail.com & 1234

const loginApi = (ele) =>{
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ele.email === "kalse@gmail.com" && ele.password === "1234"){
                resolve('successfully login')
            }else{
                reject('invalid username or password')
            }
        }, 1500)
    })
    return promise
}

const onSubmitHandler = (eve) => {
    eve.preventDefault();
    let obj = {
        email: emailControl.value,
        password: passwordControl.value
    }
    loginApi(obj)
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: res,
                timer: 2000
              })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: err,
                timer: 2000
              })
        })
        .finally(() =>{
            formControl.reset();
        })
}



formControl.addEventListener("submit", onSubmitHandler)