import { Component, Input, OnInit } from '@angular/core';
import { ThemaService } from '../service/thema.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {



  @Input() themaName!: string;
  @Input() indexOfthema!: number;


  constructor(private themaService: ThemaService) { }

  ngOnInit(): void {
  }




}
