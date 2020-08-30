import { Component, OnInit } from '@angular/core';
import { MatDialog,  } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { DistrictDialogeComponent } from '../district-dialoge/district-dialoge.component'


@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  districtNow: string;
  Districts = [];

  constructor(public dialog: MatDialog,
    public App: AppComponent) { }

  ngOnInit(): void {
    for (let district of Object.keys(this.DistrictWise)) {
      this.Districts.push(district)
    } 
    this.Districts.sort()
  }
  openDistrict(dist, distr) {
    this.dialog.open(DistrictDialogeComponent, {
      data: {
        data: dist,
        district: distr
      }
    });
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
    trivandrum: [
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
    kollam: [
      {
        "Name": "Nearest Police station",
        "Number": 100
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
    alappuzha: [
      {
        "Name": "Corona helpline numbers",
        "Number": "04772239999"
      },
      {
        "Name": "District Emergency operation center",
        "Number": "04772238630"
      },
      {
        "Name": "Control Room Collectorate",
        "Number": "0477 2238630"
      },
      {
        "Name": "Control Room Ambalappuzha",
        "Number": "0477 2253771"
      },
      {
        "Name": "Control Room Cherthala",
        "Number": "0478 2813103"
      },
      {
        "Name": "Control Room Karthikapally",
        "Number": "0479 2412797"
      },
      {
        "Name": "Control Room Kuttanad",
        "Number": "0477 2702221"
      },
      {
        "Name": "Control Room Mavelikkara",
        "Number": "0479 2302216"
      },
      {
        "Name": "Control Room Chengannur",
        "Number": "0479 2452334"
      },
      {
        "Name": "KSEB",
        "Number": 9496010101
      },
      {
        "Name": "Media Cell",
        "Number": "0477 2237018"
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
        "Number": 108
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
        "Name": "Railway Enquiry",
        "Number": 139
      },
      {
        "Name": "Senior Citizen Helpline",
        "Number": 1091
      },
      {
        "Name": "Railway Accident Emergency Service",
        "Number": 1072
      },
      {
        "Name": "Road Accident Emergency Service",
        "Number": 1073
      },
      {
        "Name": "Kisan Call Centre",
        "Number": 1551
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
        "Name": "Indian Railway Security Helpline",
        "Number": 1322
      },
      {
        "Name": "LPG Leak Helpline",
        "Number": 1906
      }
    ],
    pathanamthitta: [
      {
        "Name": "Dy.Collector ( Disaster Management)",
        "Number": "0468-2322515"
      },
      {
        "Name": "Collectorate, Pathanamthitta",
        "Number": "0468-2222515"
      },
      {
        "Name": "CA to District Collector",
        "Number": "0468-2222505"
      },
      {
        "Name": "Tahsildar Adoor",
        "Number": "04734-224826"
      },
      {
        "Name": "Tahsildar Kozhencherry",
        "Number": "0468-2222221"
      },
      {
        "Name": "Tahsildar Mallappally",
        "Number": "0469-2682293"
      },
      {
        "Name": "Tahsildar Ranni",
        "Number": "04735-227442"
      },
      {
        "Name": "Tahsildar Thiruvalla",
        "Number": "0469-2601303"
      },
      {
        "Name": "Tahsildar Konni",
        "Number": "0468-2240087"
      }
    ],
    kottayam: [
      {
        "Name": "Kottayam",
        "Number": "0481 2568007"
      },
      {
        "Name": "Meenachil",
        "Number": "04822 212325"
      },
      {
        "Name": "Vaikom",
        "Number": "04829 231331"
      },
      {
        "Name": "Kanjirapally",
        "Number": "04828 202331"
      },
      {
        "Name": "Changanacherry",
        "Number": "0481 2420037"
      }
    ],
    idukki: [
      {
        "Name": "DIAL A DOCTOR (Toll free Tele Health Helpline)",
        "Number": "0471- 2552056"
      },
      {
        "Name": "Disaster Management Helpline",
        "Number": "1077"
      },
      {
        "Name": "Kerala Water Authority (Toll free no.)",
        "Number": "1800-425-5313"
      },
      {
        "Name": "Fire Station",
        "Number": 101
      },
      {
        "Name": "KSEB",
        "Number": "0471- 2555544"
      },
      {
        "Name": "‘Mitra’ Women Hepline",
        "Number": "181"
      },
      {
        "Name": "Police Station (Nearest)",
        "Number": 100
      },
      {
        "Name": "Women Helpline",
        "Number": 1091
      }
    ],
    ernakulam: [
      {
        "Name": "District Collector",
        "Number": "0484-2423001, 0484-2372902"
      },
      {
        "Name": "Deputy Collector",
        "Number": 8547610077
      },
      {
        "Name": "Junior Superindent",
        "Number": 9495336942
      },
      {
        "Name": "D1",
        "Number": 9833492004
      },
      {
        "Name": "D2",
        "Number": 9744091291
      },
      {
        "Name": "D3",
        "Number": 9048227848
      },
      {
        "Name": "D4",
        "Number": 8848573091
      },
      {
        "Name": "Tahsildar Kochi",
        "Number": "0484-2215559"
      },
      {
        "Name": "Tahsildar Kanayannoor",
        "Number": "0484-2360704"
      },
      {
        "Name": "Tahsildar Paravur",
        "Number": "0484-2442326"
      },
      {
        "Name": "Tahsildar Aluva",
        "Number": "0484-2624052"
      },
      {
        "Name": "Tahsildar Kunnathunad",
        "Number": "0484-2522224"
      },
      {
        "Name": "Tahsildar Muvattupuzha",
        "Number": "0485-2832313"
      },
      {
        "Name": "Tahsildar Kothamangalam",
        "Number": "0485-2822298"
      },
      {
        "Name": "SDMA Control Room -TVM",
        "Number": "0471-2331639"
      },
      {
        "Name": "SEOC",
        "Number": "0471-2364424"
      },
      {
        "Name": "Police Control Room -City",
        "Number": "0484-2359200"
      },
      {
        "Name": "police Control Room -Rural",
        "Number": "0484-2621100"
      },
      {
        "Name": "Special Branch",
        "Number": "0484-2623540"
      },
      {
        "Name": "Fire & Rescue Control Room",
        "Number": "0484-2205550"
      },
      {
        "Name": "KSEB Control Room",
        "Number": "0484-2392358"
      },
      {
        "Name": "DMO Control Room",
        "Number": "0484-2369567"
      },
      {
        "Name": "Water Authority Control Room",
        "Number": "0484-2361369"
      },
      {
        "Name": "Fisheries Control Room",
        "Number": "0484-2394476"
      },
      {
        "Name": "Mahesh Deputy Director Fisheries",
        "Number": 9496007029
      },
      {
        "Name": "NAVY-JOC",
        "Number": "0484-2668889"
      }
    ],
    thrissur: [
      {
        "Name": "Citizen’s Call center",
        "Number": 155300
      },
      {
        "Name": "Cyber Cell",
        "Number": " 0471-2449090"
      },
      {
        "Name": "Water Authority ",
        "Number": "0487-2333070"
      },
      {
        "Name": "Child Helpline ",
        "Number": 1098
      },
      {
        "Name": "R.T.O  helpline  ",
        "Number": 8547639108
      },
      {
        "Name": "Excise Helpline ",
        "Number": "0487-2361237"
      },
      {
        "Name": "Women Helpline ",
        "Number": 1091
      },
      {
        "Name": "Police helpline ",
        "Number": 100
      },
      {
        "Name": "Food Adulteration ",
        "Number": 8943346188
      }
    ],
    palakkad: [
      {
        "Name": "State Control Room ",
        "Number": 1070
      },
      {
        "Name": "Collectorate ",
        "Number": "0491-2505309"
      },
      {
        "Name": "Police Control Room ",
        "Number": "0491-2522340"
      },
      {
        "Name": "Accident/Emergency Help Line",
        "Number": 108
      },
      {
        "Name": "Fire and Rescue ",
        "Number": 101
      },
      {
        "Name": " Ambulance Help Line ",
        "Number": 102
      },
      {
        "Name": "Vanitha Help Line",
        "Number": 1090
      },
      {
        "Name": "Child Line ",
        "Number": "0491-2570291"
      },
      {
        "Name": "tate Vanitha Cell (TVM) ",
        "Number": "0471-2338100"
      },
      {
        "Name": "Women’s Cell, Palakkad ",
        "Number": "0491-2504650"
      },
      {
        "Name": "Sexual Harasment (Safe Women)",
        "Number": 1091
      },
      {
        "Name": " Highway Helpline Numbers of Kerala Police ",
        "Number": "9846 100 100"
      },
      {
        "Name": "Railway Helpline Numbers of Kerala Police ",
        "Number": "9846 200 100"
      },
      {
        "Name": "KSRTC Palakkad ",
        "Number": "0491-2520098"
      },
      {
        "Name": "KSEB Palakkad ",
        "Number": "0491-2537053"
      }
    ],
    malappuram: [
      {
        "Name": "Disaster Managemet, Collectorate",
        "Number": "0483 2736320"
      },
      {
        "Name": "M.S.P ,Commandant",
        "Number": "0483-2734921"
      },
      {
        "Name": "M.S.P Melmuri",
        "Number": "0483-2779108"
      },
      {
        "Name": "S.R.A.F Pandikkad",
        "Number": " 0483-2783397"
      },
      {
        "Name": "Fire & Rescue,Asst. Divisional Officer",
        "Number": 9496468129
      },
      {
        "Name": "Fire Force, Ponnani",
        "Number": " 0494-2666022"
      },
      {
        "Name": " Fire Force, Malappuram",
        "Number": " 0483-2734800"
      },
      {
        "Name": " Fire Force, Tirur",
        "Number": " 0494-2422333"
      },
      {
        "Name": " Fire Force, Perinthalmanna",
        "Number": " 04933-227800"
      },
      {
        "Name": "Fire Force, Nilambur",
        "Number": "04931-224005"
      },
      {
        "Name": "D.M.O (Health)",
        "Number": "0483-2737857"
      },
      {
        "Name": "D.M.O (Ayurveda)",
        "Number": "0483-273485"
      },
      {
        "Name": "D.M.O (homeo)",
        "Number": "0483-273138"
      },
      {
        "Name": "Food and Safety",
        "Number": "0483-2732121"
      },
      {
        "Name": " C.I. Valanchery",
        "Number": " 0494-644143"
      },
      {
        "Name": "C.I. Ponnani",
        "Number": "0494-2666027"
      },
      {
        "Name": " Fisheries,Dy.Director, Ponnani",
        "Number": " 0494-2666428"
      },
      {
        "Name": "Port Officer, Ponnani",
        "Number": "0494-2666058"
      },
      {
        "Name": "Indian Navy,Cochin",
        "Number": "0484-2872466"
      },
      {
        "Name": "Camp Office, Ernakulam collectorate",
        "Number": "0484-2372902"
      },
      {
        "Name": "Commando Operations",
        "Number": "0484-2218121"
      },
      {
        "Name": "coat guard, District commander",
        "Number": "0484-2218121"
      },
      {
        "Name": "Boat rescue services, kerala",
        "Number": "0484-2218121"
      },
      {
        "Name": "Indian Oil,Cochin",
        "Number": 9447498260
      },
      {
        "Name": "Hindustan Petroleum, Cochin",
        "Number": 9446346160
      },
      {
        "Name": "Bharat Petroleum, Cochin",
        "Number": 9846244022
      }
    ],
    kozhikode: [
      {
        "Name": "Citizen’s Call center",
        "Number": 155300
      },
      {
        "Name": "Comissioner of Rescue & Relief",
        "Number": 1070
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
        "Name": "Child Help line",
        "Number": 1098
      },
      {
        "Name": "Disaster Help Line",
        "Number": 1077
      },
      {
        "Name": "BSNL Help Line",
        "Number": 1500
      },
      {
        "Name": "Police Control Room",
        "Number": 100
      },
      {
        "Name": "Fire and Rescue",
        "Number": 101
      },
      {
        "Name": "Ambulance Help Line",
        "Number": 102
      },
      {
        "Name": "Accident Help Line",
        "Number": 108
      },
      {
        "Name": "Vanitha Helpline (Police)",
        "Number": 9995399953
      },
      {
        "Name": "Vanitha – Nirbhaya",
        "Number": 9833312222
      }
    ],
    wayanad: [
      {
        "Name": "DEOC Help Line Number",
        "Number": "04936 204151"
      },
      {
        "Name": "Tribal Help Line Number",
        "Number": "04936 203400"
      },
      {
        "Name": "Police Help Line Number",
        "Number": "04396 202525"
      },
      {
        "Name": "Fire Force Help Line Number",
        "Number": "04936 202333"
      },
      {
        "Name": "Tele Medicine Help Line Number",
        "Number": "04936 203400"
      },
      {
        "Name": "Travell Pass Help Line Number",
        "Number": 9388106410
      },
      {
        "Name": "Agricultural Office Help Line Number",
        "Number": "04936 202506"
      },
      {
        "Name": "Migrant Labours Help Line Number",
        "Number": 4936203905
      }
    ],
    kannur: [
      {
        "Name": "POLICE CONTROL ROOM",
        "Number": " 100"
      },
      {
        "Name": "POLICE HELP-LINE",
        "Number": " 0471-324 3000"
      },
      {
        "Name": "POLICE MESSAGE CENTER",
        "Number": " 94 97 900000"
      },
      {
        "Name": "POLICE HIGH WAY HELP LINE",
        "Number": " 9846 100 100"
      },
      {
        "Name": "FIRE STATION",
        "Number": " 101"
      },
      {
        "Name": "AMBULANCE",
        "Number": " 108"
      },
      {
        "Name": "WOMEN HELPLINE",
        "Number": " 1091"
      },
      {
        "Name": "CRIME STOPPER",
        "Number": " 1091"
      },
      {
        "Name": "HIGH WAY ALERT",
        "Number": " 9846100100"
      },
      {
        "Name": "RAIL ALERT",
        "Number": " 9846200100"
      }
    ],
    kasaragod: [
      {
        "Name": "State Control Room",
        "Number": "0471 – 2331639"
      },
      {
        "Name": "State Emergency Operation Centre",
        "Number": "0471–2364424"
      },
      {
        "Name": "Ernakulam Collectorate ( For providing NDRF/NAVY service)",
        "Number": "0484 – 2423513"
      },
      {
        "Name": "Collectorate Kasaragod",
        "Number": "04994 -257700"
      },
      {
        "Name": "Deputy Director of Fisheries, Kasaragod at Kanhangad",
        "Number": "04672 202537"
      },
      {
        "Name": "District Medical Officer, Kasaragod at Kanhangad",
        "Number": "04672 209433"
      },
      {
        "Name": "Coastal Police station, Kasaragod",
        "Number": "04994 224800"
      },
      {
        "Name": "District Police Chief",
        "Number": "04994 230553"
      },
      {
        "Name": "Fire & Rescue Service, Kasaragod",
        "Number": "04994 -230101"
      },
      {
        "Name": "Mangalore Disaster Management",
        "Number": "0824 2220584"
      }
    ]
  }

}



