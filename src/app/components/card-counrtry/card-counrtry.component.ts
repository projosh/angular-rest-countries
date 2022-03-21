import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card-counrtry',
  templateUrl: './card-counrtry.component.html',
  styleUrls: ['./card-counrtry.component.css']
})
export class CardCounrtryComponent implements OnInit {

   @Input() public country: any; //cette propriété ici est fournie par son parent
  // On l'a rend paramétrable à l'extérieur du 
  // composant grâce au décorateur @Input() 

  



  constructor() { }

  ngOnInit(): void {
  }

}

