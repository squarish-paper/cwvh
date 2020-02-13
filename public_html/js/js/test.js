


function fetchActivities() {

    var activities = [
        {
            "day": "Monday",
            "time": "10 - 12noon",
            "name": "Ducklings",
            "summary": "Baby & Toddler Group",
            "description": "Ducklings is a friendly and informal playgroup for babies and toddlers up to school age, everyone is welcome so please feel free to drop in for a play, chat and a biscuit :)",
            "notes": "There's plenty of toys and play space for little ones to burn off some energy and it's lovely to be able to meet other parents and carers over tea or coffee as well.",
            "notesmore": "We meet on Mondays between 10 - 12 at the village hall in Countess Wear, it's pay as you go £1.50 per child and 50p for tea or coffee.",
            "contactname": "Sue Scott",
            "contactnumber": "07731 777972",
            "contactemail": "sascott1955@outlook.com",
            "image": "ducklings.jpg"
        },
        {
            "day": "Monday",
            "time": "2 - 3:30pm",
            "name": "Gentle Exercise",
            "summary": "Seated or Standing",
            "description": "A gentle exercise session, a combination of stretches and arm and leg exercises to music, designed to maintain and extend a normal range of movement, seated or standing.",
            "notes": "New course starting in September, by enrolment only.",
            "contactname": "Jane Fulford",
            "contactnumber": "07709 687415",
            "contactemail": "countesswearvillagehall@gmail.com"
        },
        {
            "day": "Monday",
            "time": "6:30 - 7:30pm",
            "name": "Pilates with Petra",
            "summary": "Mixed Ability Class",
            "description": "A gentle yet effective exercise for all, concentrating on core muscles, stretching, balance and overall well being. All levels and ages are welcome to this class, booking isn't required, feel free to drop in on the day and pay as you go if you prefer.",
            "notes": "£6 per class or £50 for 10.",
            "contactname": "Petra Berryman",
            "contactnumber": "07745 823565",
            "contactemail": "petra.jan@hotmail.com",
            "image": "pilates.jpg"
        },
        {
            "day": "Monday",
            "time": "8 - 10pm",
            "name": "Banyu Hatten Aikido",
            "summary": "Martial Arts Class",
            "description": "A non aggressive, non competitive martial art which provides effective self defence. The classes are suitable for all ages and abilities.",
            "notes": "Ten week beginners course starting in September.",
            "contactname": "Geoff",
            "contactnumber": "07960 397350",
            "contactemail": "bhaikido@googlemail.com"
        },
        {
            "day": "Tuesday",
            "time": "7 - 9pm",
            "name": "Western Spirit",
            "summary": "Line Dance Club",
            "description": "Line dance classes for beginners and improvers.",
            "contactname": "Marina Halman",
            "contactnumber": "07985 234149",
            "contactemail": "marina@westernspirit.co.uk",
            "contactwebsite": "www.westernspirit.co.uk",
            "image": "westernspirit.jpg"
        },
        {
            "day": "Wednesday",
            "time": "10 - 11:30am",
            "name": "Yoga For Everyone",
            "summary": "A Gentle Class",
            "description": "Classes concentrate on alignment of postures and breathing through out, they should be a good fit for anyone wanting to try yoga for the first time or those wanting a class that is more gentle than other styles of yoga class.",
            "notes": "FIVE WEEK COURSE (£32.50): Nov 27th - Jan 8th",
            "notesmore": "TEN WEEK COURSE (£65): Jan 15th - Mar 18th",
            "contactname": "Howard Pike",
            "contactnumber": "07709 687415",
            "contactemail": "countesswearvillagehall@gmail.com"
        },
        {
            "day": "Wednesday",
            "time": "2:30 - 4pm",
            "name": "Gentle Exercise",
            "summary": "Seated or Standing",
            "description": "A gentle exercise session, a combination of stretches and arm and leg exercises to music, designed to maintain and extend a normal range of movement, seated or standing.",
            "notes": "New course starting in September, by enrolment only.",
            "contactname": "Vicky Davidson",
            "contactnumber": "07709 687415",
            "contactemail": "countesswearvillagehall@gmail.com"
        },
        {
            "day": "Wednesday",
            "time": "8 - 10pm",
            "name": "Banyu Hatten Aikido",
            "summary": "Martial Arts Class",
            "description": "A non aggressive, non competitive martial art which provides effective self defence. The classes are suitable for all ages and abilities.",
            "notes": "Ten week beginners course starting in September.",
            "contactname": "Geoff",
            "contactnumber": "07960 397350",
            "contactemail": "bhaikido@googlemail.com",
            "secondcontactname": "Peter Tanner",
            "secondcontactnumber": "07392 253338"
        },
        {
            "day": "Thursday",
            "time": "10 - 10:30am",
            "name": "Twirly Tots",
            "summary": "Toddler Dance Class",
            "description": "A fun & friendly toddler dance class. Come along and dance, skip, spin and stomp to all your favourite Disney and pop songs with fun, sparkly and engaging props!",
            "contactname": "Miss Annabelle",
            "contactnumber": "07964 980397",
            "contactemail": "twirlytots@hotmail.com",
            "image": "twirlytots.jpg"
        },
        {
            "day": "Thursday",
            "time": "11 - 12 noon",
            "name": "Gentle Hatha Yoga",
            "summary": "Suitable For All",
            "description": "A gentle exercise class for beginners and improvers.",
            "notes": "By enrolment only.",
            "contactname": "Annelie Carver",
            "contactnumber": "07540 995021",
            "contactemail": "seventhsensehealing@outlook.com",
            "image": "hathayoga.jpg"
        },
        {
            "day": "Thursday",
            "time": "6 - 7:30pm",
            "name": "Yoga For Everyone",
            "summary": "A Gentle Class",
            "description": "Classes concentrate on alignment of postures and breathing though out, they should be a good fit for anyone wanting to try yoga for the first time or those wanting a class that is more gentle than other styles of yoga class.",
            "notes": "FOUR WEEK COURSES (£26): Nov 28th - Jan 9th (No class on Dec 12th due to general election)",
            "notesmore": "TEN WEEK COURSES (£65): Jan 16th - Mar 19th",
            "contactname": "Howard Pike",
            "contactnumber": "07709 687415",
            "contactemail": "countesswearvillagehall@gmail.com"
        },
        {
            "day": "Friday",
            "time": "10 - 11:30am",
            "name": "Yoga For Everyone",
            "summary": "A Gentle Class",
            "description": "The classes concentrate on alignment of posture and breathing throughout, perfect for beginners or anyone looking for a more gentle form of yoga!",
            "notes": "FIVE WEEK COURSES (£32.50): Nov 29th - Jan 10th",
            "notesmore": "TEN WEEK COURSES (£65): Jan 17th - Mar 20th",
            "contactname": "Howard Pike",
            "contactnumber": "07709 687415",
            "contactemail": "countesswearvillagehall@gmail.com"
        },
        {
            "day": "Sunday",
            "time": "6:30 - 9pm",
            "name": "Healing Moves",
            "summary": "Monthly Dance Class",
            "description": "Following the cycle of the year, this dance space is designed to drop deeply into your body and connect with the wisdom it holds.",
            "notes": "Monthly",
            "contactname": "Xenia Berndt",
            "contactnumber": "07748 614961",
            "contactemail": "xenaiaberndt@hotmail.com",
            "image": "healingmoves.jpg"
        }
    ]




    activities.forEach(activity => {
        // console.log(activity);
        let summary = "<br />";
        if (activity.summary)
            summary = activity.summary;
        let actId = "act"+activity.name.replace(" ","")+"_"+activity.day.replace(" ","");
        let contactName = activity.contactname ? activity.contactname : "";
        let contactNumber = activity.contactnumber ? activity.contactnumber : "";
        let contactEmail = activity.contactemail ? activity.contactemail : "";
        let contactWebsite = activity.contactwebsite ? activity.contactwebsite : "";
        let notes = activity.notes ? activity.notes : "";
        let notesmore = activity.notesmore ? activity.notesmore : "";
        let image = activity.image ? activity.image : "";
        

        document.getElementById("activities-"+activity.day).innerHTML += 
       "<div class=\"w3-col l2 w3-center w3-padding-small\">"+
        "<div class=\"w3-card\">" +
          "<div class=\"w3-containter\">" +
            "<div class=\"w3-card\">" + 
              "<div class=\"w3-containter\">" + 
                "<div class=\"w3-text-bold\">"+activity.name+"</div>" + 
                "<div class=\"w3-small\">"+summary+"</div>" +
                "<div class=\"w3-row\">" +
                   "<div class=\"w3-threequarter\">"+activity.time+"</div>" +
                   "<div class=\"w3-quarter w3-hover w3-round-xlarge w3-light-blue\" style=\"cursor:pointer\" onclick=\"onClick('"+actId+"');ga('send', 'event', 'Activity', 'Click', '"+activity.name+"');\" ><i class=\"fa fa-info\"></i></div>" +
                "</div>" +
                "</div>" +
              "</div>" +
            "</div>" +
           "</div>" +
           "<div id=\""+actId+"Header\" class=\"w3-hide\">"+activity.name+"</div>" +
           "<div id=\""+actId+"SubHeader\" class=\"w3-hide\">"+activity.summary+"</div>" +
           "<div id=\""+actId+"Long\" class=\"w3-hide\">"+activity.description+"</div>" +
           "<div id=\""+actId+"Notes\" class=\"w3-hide\">"+notes+"</div>" +
           "<div id=\""+actId+"NotesMore\" class=\"w3-hide\">"+notesmore+"</div>" +
           "<div id=\""+actId+"ContactName\" class=\"w3-hide\">"+contactName+"</div>" +
           "<div id=\""+actId+"ContactNumber\" class=\"w3-hide\">"+contactNumber+"</div>" +
           "<div id=\""+actId+"ContactEmail\" class=\"w3-hide\">"+contactEmail+"</div>" +
           "<div id=\""+actId+"ContactWebsite\" class=\"w3-hide\">"+contactWebsite+"</div>" +
           "<div id=\""+actId+"Time\" class=\"w3-hide\">"+activity.time+"</div>" +
           "<div id=\""+actId+"Day\" class=\"w3-hide\">"+activity.day+"</div>" +
           "<div id=\""+actId+"Image\" class=\"w3-hide\">"+image+"</div>" +
        "</div>";
    });


}