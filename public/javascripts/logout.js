function mostrarLogout() {
    const Toast = Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: 'success',
        title: 'Logged out successfully'
        })
        .then(
            function() {
                changeLogout();
            }
        )
}