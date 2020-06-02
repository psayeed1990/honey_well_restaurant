window.onload = function () {
    //starts reservation form disabling

    //getting the reservations, date, hour, table data
    let reservations = document.getElementsByClassName("reservations-future");
    let reservationsComb = [];

    for (let i = 0; i < reservations.length; i++) {
        reservationsComb.push(reservations[i].innerHTML);
    }
    console.log(reservationsComb.length);

    let datesGrab = document.getElementsByClassName("date-future");
    let hoursGrab = document.getElementsByClassName("hour-future");
    let tablesGrab = document.getElementsByClassName("table-future");
    let tables = [];
    let hours = [];
    let dates = [];
    for (let i = 0; i < tablesGrab.length; i++) {
        tables.push(tablesGrab[i].innerHTML);
    }
    for (let i = 0; i < hoursGrab.length; i++) {
        hours.push(hoursGrab[i].innerHTML);
    }
    for (let i = 0; i < datesGrab.length; i++) {
        dates.push(datesGrab[i].innerHTML);
    }

    let allCombForADate = hours.length * tables.length;
    let allCombForAHour = tables.length;
    //getting the reservation form value
    let dateId = document.getElementById("reserveddate");
    let hourId = document.getElementById("reservedhour");
    let tableId = document.getElementById("reservedtable");

    dateId.addEventListener("change", disableTable);
    hourId.addEventListener("change", disableTable);

    function disableTable() {
        //reset the options hidden attibute first
        for (let option = 1; option < tableId.options.length; option++) {
            tableId.options[option].removeAttribute("disabled");
        }

        for (let option = 0; option < tableId.options.length; option++) {
            let combination =
                dateId.value.split(" ")[1] +
                " " +
                hourId.value.split(" ")[1] +
                " " +
                tableId.options[option].value.split(" ")[1];

            console.log(combination, reservationsComb);

            if (reservationsComb.indexOf(combination) != -1) {
                //diable options in table
                tableId.options[option].setAttribute("disabled", true);
            }
        }
    }

    //end reservation form disabling

    /*
    document.getElementById("edit").addEventListener("click", loadName);

    function loadName(e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        var url = "/fullname";
        var oldName = document.getElementById("name-view");

        xhr.open("GET", url, true);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var res = xhr.responseText;
                var parser = new DOMParser();
                var htmlDoc = parser.parseFromString(res, "text/html");

                var pageData = htmlDoc.getElementById("form");

                oldName.innerHTML = pageData.innerHTML;

                
                window.history.pushState(
                    { html: htmlDoc.html, pageTitle: document.title },
                    "",
                    url
                );

                
                window.onpopstate = function (e) {
                    if (e.state) {
                        document.getElementById("all-content").innerHTML =
                            e.state.html;
                        document.title = e.state.pageTitle;
                    }
                };
                
            }
            console.log("Done");
        };

        xhr.onprogress = function () {
            oldName.innerHTML = "Loading...";
            console.log("Loadind...");
        };

        xhr.onerror = function () {
            oldName.innerHTML = "Load error";
            console.log("Error");
        };

        xhr.send();
    }
    */
};
