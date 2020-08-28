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
    });
  }

  emergencynum: Array<any> = [
    {
      name: "Flood / Disaster Helpline",
      num: "1070"
    },{
      name: "Police Helpline",
      num: "4713243000"
    },{
      name: "Police Message Centre",
      num: "94 97 900000"
    },{
      name: "Police High Way Help Line",
      num: "9846 100 100"
    },{
      name: "Fire Station",
      num: "101"
    },{
      name: "Ambulance",
      num: "108"
    },{
      name: "Women Helpline",
      num: "1091"
    },{
      name: "Crime Stopper",
      num: "1090"
    },{
      name: "Child Helpline",
      num: "1098"
    },{
      name: "Highway Alert",
      num: "9846100100"
    },{
      name: "Railway Alert",
      num: "9846200100"
    },{
      name: "Anti Ragging Helpline",
      num: "1800 180 5522"
    },{
      name: "Police station",
      num: "100"
    }
  ]

  controlroom: Array<any> = [
    {
      name: "Thiruvananthapuram City",
      num: "0471-2331843"
    },{
      name: "Thiruvananthapuram Rural",
      num: "0471-2316995"
    },{
      name: "Kollam",
      num: "0474-2746000"
    },{
      name: "Pathanamthitta",
      num: "0468-2222226"
    },{
      name: "Alappuzha",
      num: "0477-2251166"
    },{
      name: "Kottayam",
      num: "0481-5550400"
    },{
      name: "Idukki",
      num: "04862-221100"
    },{
      name: "Ernakulam City",
      num: "0484-2359200"
    },{
      name: "Ernakulam Rural",
      num: "047123310484-2621100843"
    },{
      name: "Thrissur",
      num: "0487-2424193"
    },{
      name: "Palakkad",
      num: "0491-2522340"
    },{
      name: "Malappuram",
      num: "0483-2734966"
    },{
      name: "Kozhikode City",
      num: "0495-2721831"
    },{
      name: "Kozhikode Rural",
      num: "0496-2523091"
    },{
      name: "Wayanad",
      num: "04936-205808"
    },{
      name: "Kannur",
      num: "0497-2763337"
    },{
      name: "Kasaragod",
      num: "04994-22296"
    }
  ]

  hospitals: Array<any> = [
    {
      name: "Kerala Institute of Medical sciences",
      num: "0471-3041400"
    },{
      name: "Trivandrum Medical College ( 24X7 CASULTY )",
      num: "0471-2528300"
    },{
      name: "Holy cross Hospital",
      num: "0474-2530121"
    },{
      name: "India Hospital",
      num: "0471-2333193"
    },{
      name: "Govt Hospital Haripad Talak",
      num: "094951 1901"
    },{
      name: "Aster Medicity ( Kochi )",
      num: "0484-6699999"
    },{
      name: "Rajagiri Hospital",
      num: "0484-6655000"
    },{
      name: "Medical Trust Hospital",
      num: "0484-2358001"
    },{
      name: "Shree Krishnapuram Govt, Hospital",
      num: "0466-2261744"
    },{
      name: "Silverline Hospital ( Ernakulam )",
      num: "095391 18118"
    },{
      name: "Government Hospital ( Pattambi )",
      num: "0466-2213769"
    },{
      name: "Sunrise Hospital ( Kakkanad )",
      num: "0484-4160000"
    },{
      name: "Punarnava Ayurvedic Hospital",
      num: "0484-2801415"
    },{
      name: "Indo - American Hospital ( Vaikom )",
      num: "04829-217800"
    },{
      name: "V.G Saraf Memorial Hospital",
      num: "0484-2380452"
    }
  ]

}

