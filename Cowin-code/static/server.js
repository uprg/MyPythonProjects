function slots(){
    let d = {
    "Ahmednagar": 391,
    "Akola": 364,
    "Amravati": 366,
    "Aurangabad": 397,
    "Beed": 384,
    "Bhandara": 370,
    "Buldhana": 367,
    "Chandrapur": 380,
    "Dhule": 388,
    "Gadchiroli": 379,
    "Gondia": 378,
    "Hingoli": 386,
    "Jalgaon": 390,
    "Jalna": 396,
    "Kolhapur": 371,
    "Latur": 383,
    "Mumbai": 395,
    "Nagpur": 365,
    "Nanded": 382,
    "Nandurbar": 387,
    "Nashik": 389,
    "Osmanabad": 381,
    "Palghar": 394,
    "Parbhani": 385,
    "Pune": 363,
    "Raigad": 393,
    "Ratnagiri": 372,
    "Sangli": 373,
    "Satara": 376,
    "Sindhudurg": 374,
    "Solapur": 375,
    "Thane": 392,
    "Wardha": 377,
    "Washim": 369,
    "Yavatmal": 368
    }
    let output = "" //<h2>Slots</h2>
    let final_output = []
    let id = d[document.getElementById("city").value]
    let date = new Date()
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${formatted_date}`
    fetch(url) 
    .then((res) => {
        return res.json()
    })
    .then(res => {
        if (res.sessions.length === 0){
            document.getElementById("slots").innerHTML = "<h4>Sorry Server Didn't Provide any Data Regrading this District/City</h4>"
        }
        else{
            res.sessions.forEach((i) => {
                if (i.available_capacity === 0){
                    console.log("0")
                }
                else{
                    final_output.push(i)
                }
            })
            
            if (final_output.length === 0){
                document.getElementById("slots").innerHTML = "<h4>Sorry There are No Slots Available!!</h4>"
            }
            else{
                final_output.forEach((slot) => {
                    output += `
                    <br />
                    <br />
                    <center>
                    <table id="table-1" style=" border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">
                        <tr>
                            <th style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Name:</th>
                            <td style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.name}</td>
                        </tr>
                        <tr>
                            <th style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Address:</th>
                            <td style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.address}</td>
                        </tr>
                        <tr>
                            <th style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">State Name:</th>
                            <td style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.state_name}</td>
                        </tr>
                        <tr>
                            <th style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">District Name:</th>
                            <td style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.district_name}</td>
                        </tr>
                        <tr>
                            <th style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Block Name:</th>
                            <td style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.block_name}</td>
                        </tr>
                        <tr>
                            <th style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Pincode:</th>
                            <td style=" padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.pincode}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">from:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.from}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">to:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.to}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Fee Type:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.fee_type}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Date:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.date}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Available Capacity Dose 1:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.available_capacity_dose1}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Available Capacity Dose 2:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.available_capacity_dose2}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Available Capacity:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.available_capacity}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Minimum Age Limit:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.min_age_limit}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Vaccine:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.vaccine}</td>
                        </tr>
                        <tr>
                            <th style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">Slots:</th>
                            <td style="padding:8px; border: 0.2px solid rgb(223, 213, 213); color:  #f1f1f1; border-collapse: collapse;">${slot.slots}</td>
                        </tr>
                    </table>
                    </center>
                    <br />
                    <br />
                    <br />
                    `
                })
                document.getElementById("slots").innerHTML = output
            }
        }
})
}

// function filter(){
//     let input = document.getElementById("filter").value
//     console.log(input)
//     let table = document.getElementById("table-1")
//     console.log(table)
//     let tr = document.getElementsByTagName("tr")
//     for (let i=0; i < tr.length; i++){
//         let td = tr[i].getElementsByTagName("td")[0]
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.indexOf(input) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
