import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(templateRef) {
    this.dialog.open(templateRef, {
      width: '500px',
      height: '70%',
    });
  }

  emergencynum: Array<any> = [
    {
      name: "Flood / Disaster Helpline",
      num: "1070"
    }, {
      name: "Police Helpline",
      num: "4713243000"
    }, {
      name: "Police Message Centre",
      num: "94 97 900000"
    }, {
      name: "Police High Way Help Line",
      num: "9846 100 100"
    }, {
      name: "Fire Station",
      num: "101"
    }, {
      name: "Ambulance",
      num: "108"
    }, {
      name: "Women Helpline",
      num: "1091"
    }, {
      name: "Crime Stopper",
      num: "1090"
    }, {
      name: "Child Helpline",
      num: "1098"
    }, {
      name: "Highway Alert",
      num: "9846100100"
    }, {
      name: "Railway Alert",
      num: "9846200100"
    }, {
      name: "Anti Ragging Helpline",
      num: "1800 180 5522"
    }, {
      name: "Police station",
      num: "100"
    }
  ]

  controlroom: Array<any> = [
    {
      name: "Thiruvananthapuram City",
      num: "0471-2331843"
    }, {
      name: "Thiruvananthapuram Rural",
      num: "0471-2316995"
    }, {
      name: "Kollam",
      num: "0474-2746000"
    }, {
      name: "Pathanamthitta",
      num: "0468-2222226"
    }, {
      name: "Alappuzha",
      num: "0477-2251166"
    }, {
      name: "Kottayam",
      num: "0481-5550400"
    }, {
      name: "Idukki",
      num: "04862-221100"
    }, {
      name: "Ernakulam City",
      num: "0484-2359200"
    }, {
      name: "Ernakulam Rural",
      num: "047123310484-2621100843"
    }, {
      name: "Thrissur",
      num: "0487-2424193"
    }, {
      name: "Palakkad",
      num: "0491-2522340"
    }, {
      name: "Malappuram",
      num: "0483-2734966"
    }, {
      name: "Kozhikode City",
      num: "0495-2721831"
    }, {
      name: "Kozhikode Rural",
      num: "0496-2523091"
    }, {
      name: "Wayanad",
      num: "04936-205808"
    }, {
      name: "Kannur",
      num: "0497-2763337"
    }, {
      name: "Kasaragod",
      num: "04994-22296"
    }
  ]

  hospitals: Array<any> = [
    {
      name: "Kerala Institute of Medical sciences",
      num: "0471-3041400"
    }, {
      name: "Trivandrum Medical College ( 24X7 CASULTY )",
      num: "0471-2528300"
    }, {
      name: "Holy cross Hospital",
      num: "0474-2530121"
    }, {
      name: "India Hospital",
      num: "0471-2333193"
    }, {
      name: "Govt Hospital Haripad Talak",
      num: "094951 1901"
    }, {
      name: "Aster Medicity ( Kochi )",
      num: "0484-6699999"
    }, {
      name: "Rajagiri Hospital",
      num: "0484-6655000"
    }, {
      name: "Medical Trust Hospital",
      num: "0484-2358001"
    }, {
      name: "Shree Krishnapuram Govt, Hospital",
      num: "0466-2261744"
    }, {
      name: "Silverline Hospital ( Ernakulam )",
      num: "095391 18118"
    }, {
      name: "Government Hospital ( Pattambi )",
      num: "0466-2213769"
    }, {
      name: "Sunrise Hospital ( Kakkanad )",
      num: "0484-4160000"
    }, {
      name: "Punarnava Ayurvedic Hospital",
      num: "0484-2801415"
    }, {
      name: "Indo - American Hospital ( Vaikom )",
      num: "04829-217800"
    }, {
      name: "V.G Saraf Memorial Hospital",
      num: "0484-2380452"
    }
  ]

  DistrictWise = {
    Trivandrum: [
      {
        "Name": "Control Room",
        "Number": "0471-2730067"
      },
      {
        "Name": "Media Center",
        "Number": "0471-2730087"
      },
      {
        "Name": "National Emergency Number",
        "Number": 112
      },
      {
        "Name": "Police",
        "Number": 100
      },
      {
        "Name": "Fire",
        "Number": 101
      },
      {
        "Name": "Ambulance",
        "Number": 102
      },
      {
        "Name": "Disaster Management Services",
        "Number": "0471-2730045"
      },
      {
        "Name": "Women Helpline",
        "Number": 1091
      },
      {
        "Name": "Women Helpline – ( Domestic Abuse )",
        "Number": 181
      },
      {
        "Name": "Aids Helpline",
        "Number": 1097
      },
      {
        "Name": "Crime Stopper",
        "Number": 1090
      },
      {
        "Name": "Railway Police Alert ",
        "Number": 9846200100
      },
      {
        "Name": "Highway Alert",
        "Number": 9846100100
      },
      {
        "Name": "Road Accident Emergency Service",
        "Number": " 108"
      },
      {
        "Name": "SMS Center",
        "Number": 9497900000
      },
      {
        "Name": "Children In Difficult Situation",
        "Number": 1098
      },
      {
        "Name": "Central Vigilance Commission",
        "Number": 1964
      },
      {
        "Name": "Tourist Alert",
        "Number": 9846300100
      },
      {
        "Name": "Pink Petrol",
        "Number": 1515
      },
      {
        "Name": "District Emergency operation center",
        "Number": "0471-2730045"
      }
    ],
    Kollam: [
      {
        "Name":"Nearest Police station",
        "Number":100
      },
      {
        "Name": "Police Helpline",
        "Number": "0471-324 3000"
      },
      {
        "Name": "Police Message Centre",
        "Number": "94 97 900000"
      },
      {
        "Name": "Police High Way Help Line",
        "Number": "9846 100 100"
      },
      {
        "Name": "Fire Station",
        "Number": 101
      },
      {
        "Name": "Ambulance",
        "Number": 108
      },
      {
        "Name": "Crime Stopper",
        "Number": 1090
      },
      {
        "Name": "Women Helpline",
        "Number": 1091
      },
      {
        "Name": "Traffic Alert",
        "Number": 1099
      },
      {
        "Name": "Highway Alert",
        "Number": 9846100100
      },
      {
        "Name": "Highway Alert",
        "Number": "9497900000"
      },
      {
        "Name": "Rail Alert",
        "Number": 9846200100
      },
      {
        "Name": "Computer Emergency Response Team",
        "Number": "0471-2725646"
      },
      {
        "Name": "Kerala Police Message Centre",
        "Number": "94979 00000"
      }
    ],
    Alappuzha: [
      {
        "Name":"Corona helpline numbers",
        "Number":"04772239999"
      },
      {
        "Name":"District Emergency operation center",
        "Number":"04772238630"
      },
      {
        "Name":"Control Room Collectorate",
        "Number":"0477 2238630"
      },
      {
        "Name":"Control Room Ambalappuzha",
        "Number":"0477 2253771"
      },
      {
        "Name":"Control Room Cherthala",
        "Number":"0478 2813103"
      },
      {
        "Name":"Control Room Karthikapally",
        "Number":"0479 2412797"
      },
      {
        "Name":"Control Room Kuttanad",
        "Number":"0477 2702221"
      },
      {
        "Name":"Control Room Mavelikkara",
        "Number":"0479 2302216"
      },
      {
        "Name":"Control Room Chengannur",
        "Number":"0479 2452334"
      },
      {
        "Name":"KSEB",
        "Number":9496010101
      },
      {
        "Name":"Media Cell",
        "Number":"0477 2237018"
      },
      {
        "Name":"National Emergency Number",
        "Number":112
      },
      {
        "Name":"Police",
        "Number":100
      },
      {
        "Name":"Fire",
        "Number":101
      },
      {
        "Name":"Ambulance",
        "Number":102
      },
      {
        "Name":"Disaster Management Services",
        "Number":108
      },
      {
        "Name":"Women Helpline",
        "Number":1091
      },
      {
        "Name":"Women Helpline – ( Domestic Abuse )",
        "Number":181
      },
      {
        "Name":"Aids Helpline",
        "Number":1097
      },
      {
        "Name":"Railway Enquiry",
        "Number":139
      },
      {
        "Name":"Senior Citizen Helpline",
        "Number":1091
      },
      {
        "Name":"Railway Accident Emergency Service",
        "Number":1072
      },
      {
        "Name":"Road Accident Emergency Service",
        "Number":1073
      },
      {
        "Name":"Kisan Call Centre",
        "Number":1551
      },
      {
        "Name":"Children In Difficult Situation",
        "Number":1098
      },
      {
        "Name":"Central Vigilance Commission",
        "Number":1964
      },
      {
        "Name":"Indian Railway Security Helpline",
        "Number":1322
      },
      {
        "Name":"LPG Leak Helpline",
        "Number":1906
      }
    ],
    Pathanamthitta:[
      {
        "Name":"Dy.Collector ( Disaster Management)",
        "Number":"0468-2322515"
      },
      {
        "Name":"Collectorate, Pathanamthitta",
        "Number":"0468-2222515"
      },
      {
        "Name":"CA to District Collector",
        "Number":"0468-2222505"
      },
      {
        "Name":"Tahsildar Adoor",
        "Number":"04734-224826"
      },
      {
        "Name":"Tahsildar Kozhencherry",
        "Number":"0468-2222221"
      },
      {
        "Name":"Tahsildar Mallappally",
        "Number":"0469-2682293"
      },
      {
        "Name":"Tahsildar Ranni",
        "Number":"04735-227442"
      },
      {
        "Name":"Tahsildar Thiruvalla",
        "Number":"0469-2601303"
      },
      {
        "Name":"Tahsildar Konni",
        "Number":"0468-2240087"
      }
    ],
    Kottayam:[
      {
        "Name":"Kottayam",
        "Number":"0481 2568007"
      },
      {
        "Name":"Meenachil",
        "Number":"04822 212325"
      },
      {
        "Name":"Vaikom",
        "Number":"04829 231331"
      },
      {
        "Name":"Kanjirapally",
        "Number":"04828 202331"
      },
      {
        "Name":"Changanacherry",
        "Number":"0481 2420037"
      }
    ]
  }

}

