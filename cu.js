function checkEligibility() {

    let ssc = document.getElementById("ssc").value;
    let hsc = document.getElementById("hsc").value;
    let group = document.getElementById("group").value;

    let result = document.getElementById("result");

    if (ssc == "" || hsc == "" || group == "") {

        result.innerHTML = "Result: Please fill all fields";

    }

    else if (ssc < 0 || ssc > 5 || hsc < 0 || hsc > 5) {

        result.innerHTML = "Result: Invalid GPA";

    }

    else {

        ssc = parseFloat(ssc);
        hsc = parseFloat(hsc);

        let requiredSSC;
        let requiredHSC;

        if (group == "A") {

            requiredSSC = 4.00;
            requiredHSC = 3.50;

        }

        else if (group == "D1") {

            requiredSSC = 2.50;
            requiredHSC = 2.50;

        }

        else {

            requiredSSC = 3.50;
            requiredHSC = 3.50;

        }

        if (ssc >= requiredSSC && hsc >= requiredHSC) {

            result.innerHTML = "Result: You are Eligible";

        }

        else {

            result.innerHTML = "Result: You are Not Eligible";

        }

    }

}


function apply() {

    let result = document.getElementById("result").innerHTML;

    if (result == "Result: You are Eligible") {

        alert("You can apply for CU admission!");

    }

    else {

        alert("Please check your eligibility first!");

    }

}