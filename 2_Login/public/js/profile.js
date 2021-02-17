$(document).ready(function () {




    $("#edit").click(function(){
        console.log("masfdofljdsahfbknarlrisyfhdbkzjn");
        $("#exampleModal").modal("toggle");
      });



    $("#logOut_btn").click(function (e) {
        let login_name = $("#userName");
        let login_pass = $("#logOut_btn");



            let user = {
                userName: $(login_name).html(),
            }
            $.ajax({
                type: "POST",
                url: "/login/logout",
                data: JSON.stringify(user),
                // dataType: "application/json",
                success: function (response) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your are Log Out now',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    window.location.replace("/login");
                },

                error: function (err) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'This user or password is invalid',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      console.log(err);
                },
            });


    });














});