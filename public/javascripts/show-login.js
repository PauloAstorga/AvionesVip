function mostrarLogin() {
    const Toast = Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    icon: 'success',
    title: 'Signed in successfully'
    })
    .then(
        function() {
            window.location.href = "/"
        }
    )

}

function mostrarLoginIncorrecto() {
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

    Toast.fire({
    icon: 'error',
    title: 'Incorrect credentials'
    })
}