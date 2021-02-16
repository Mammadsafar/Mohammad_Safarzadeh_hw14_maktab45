$(".log-in").click(function () {
    $(".signIn").addClass("active-dx");
    $(".signUp").addClass("inactive-sx");
    $(".signUp").removeClass("active-sx");
    $(".signIn").removeClass("inactive-dx");
});
$(".back").click(function () {
    $(".signUp").addClass("active-sx");
    $(".signIn").addClass("inactive-dx");
    $(".signIn").removeClass("active-dx");
    $(".signUp").removeClass("inactive-sx");
});



$(document).ready(function () {
    let i = 1;

    $("#signUp_btn").click(function (e) {
        let signUp_name = $("#signUp_name");
        let signUp_email = $("#signUp_email");
        let signUp_pass = $("#signUp_pass");
        let signUp_verify = $("#signUp_verify");
        let gender = $("#gender");

        let array = [signUp_name, signUp_email, gender, signUp_pass, signUp_verify];
        check_input(array);
        console.log(`========================================>  ${i}  <========================================`);
        i = i + 1;
        // if (signUp_pass.val() !== signUp_verify.val()) {

        //     $(`${signUp_pass.selector}, ${signUp_verify.selector}`).css({
        //         "border-bottom": "2px solid #ff1818",
        //     })

        // } else {
        //     $(`${signUp_pass.selector}, ${signUp_verify.selector}`).css({
        //         "border-bottom": "1px solid #ffc185s",
        //     })

        // }
        for (const key in array) {
            console.log(key);

            if (array[key].val() !== "" || array[key].val() !== "Gender") {
                console.log(`${array[key].selector} ======> RED`);
                $(`${array[key].selector}`).css({
                    "border-bottom": "2px solid #ff1818",
                })

            }
        }



        // if (signUp_name[0].value === "" && signUp_email[0].value === "" && signUp_pass[0].value === "" && signUp_verify[0].value === "" && gender[0].value === "Gender") {

        //     $("#gender, #signUp_name, #signUp_email, #signUp_pass, #signUp_verify").css({
        //         "border-bottom": "2px solid #ff1818",
        //     })

        
        

    });
    $("#login_btn").click(function (e) {
        let login_name = $("#login_name");
        let login_pass = $("#login_pass");
        // e.preventDefault();
        console.log(login_name[0].value);
        console.log(login_pass[0].value);
        
    });
    
})




function check_input(array){
    for (const key in array) {
        console.log(key);

        if (array[key].val() === "" || array[key].val() === "Gender") {
            console.log(`${array[key].selector} ======> RED`);
            $(`${array[key].selector}`).css({
                "border-bottom": "2px solid #ff1818",
            })

        }if (array[key].val() !== "" || array[key].val() !== "Gender"){
            console.log(`${array[key].selector} ======> YELLOW`);

            $(`${array[key].selector}`).css({
                "border-bottom": "1px solid #ffc185s",
            })

        }
    }
}




    // //todo =======================> 1 <=======================
    //     // $("#signUp_email::placeholder").css("color", "red");
    //     // "color": "#ff7d00"original
    //     // "color": "#ff1100"red
    //     //todo =======================> 2 <=======================
    // } else if (signUp_name[0].value !== "" && signUp_email[0].value === "" && signUp_pass[0].value === "" && signUp_verify[0].value === "" && gender[0].value === "Gender") {

    //     $("#gender, #signUp_email, #signUp_pass, #signUp_verify").css({
    //         "border-bottom": "2px solid #ff1818",
    //     })
    //     $("#signUp_name").css({
    //         "border-bottom": "px solid #ffc185",
    //     })
    //     // $("#signUp_email::placeholder").css("color", "red");
    //     //todo =======================> 3 <=======================
    // } else if (signUp_name[0].value !== "" && signUp_email[0].value !== "" && signUp_pass[0].value === "" && signUp_verify[0].value === "" && gender[0].value === "Gender") {

    //     $("#gender, #signUp_pass, #signUp_verify").css({
    //         "border-bottom": "2px solid #ff1818",
    //         "color": "#ff1100"
    //     })
    //     $(" #signUp_name, #signUp_email").css({
    //         "border-bottom": "px solid #ffc185",
    //     })
    //     // $("#signUp_email::placeholder").css("color", "red");
    //     //todo =======================> 4 <=======================
    // } else if (signUp_name[0].value !== "" && signUp_email[0].value !== "" && signUp_pass[0].value === "" && signUp_verify[0].value === "" && gender[0].value === "Gender") {

    //     $("#gender, #signUp_pass, #signUp_verify").css({
    //         "border-bottom": "2px solid #ff1818",
    //         "color": "#ff1100"
    //     })
    //     $(" #signUp_name, #signUp_email").css({
    //         "border-bottom": "px solid #ffc185",
    //     })
    //     // $("#signUp_email::placeholder").css("color", "red");
    //     //todo =======================> 5 <=======================
    // } else if (signUp_name[0].value !== "" && signUp_email[0].value !== "" && signUp_pass[0].value === "" && signUp_verify[0].value === "" && gender[0].value === "Gender") {

    //     $("#gender, #signUp_pass, #signUp_verify").css({
    //         "border-bottom": "2px solid #ff1818",
    //         "color": "#ff1100"
    //     })
    //     $(" #signUp_name, #signUp_email").css({
    //         "border-bottom": "px solid #ffc185",
    //     })
    //     // $("#signUp_email::placeholder").css("color", "red");

    // }