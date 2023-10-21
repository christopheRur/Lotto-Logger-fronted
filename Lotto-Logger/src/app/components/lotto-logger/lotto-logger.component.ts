import { Component, OnInit } from '@angular/core';
import {LottoPlay } from 'src/app/lottoPlay'

import { LottoLoggerService } from 'src/app/services/lotto-logger.service';

@Component({
  selector: 'app-lotto-logger',
  templateUrl: './lotto-logger.component.html',
  styleUrls: ['./lotto-logger.component.scss']
})
export class LottoLoggerComponent implements OnInit {

  constructor(private lottoService:LottoLoggerService) { }

  ngOnInit(): void {
  }
  lottoPly:LottoPlay[]=[];

  powerBalls!:number[];
  megaBalls!:number[];
  goldBall!:number;
  redBall!:number;

  powerSequence?:number[];

  gameName!:string;
  size!:number;
 isComplete!:boolean;
 goldMegaBall!:number;
megaBallSequence!:number[];
 redPowerBall!:number;
 powerBallSequence?:number[];

 public powerBallSequences: (number[] | null)[] = [];
 public redBallS: (number[] | null)[] = [];

/**
 *get powerball number from service
 */
public getPowerBalls(){

  this.lottoService.retrievePowerBalls().subscribe((response:number[])=>{
this.powerBalls=response;
this.getredBall();

console.log(response);
  })
}
/**
 *get megaballs from service
 */
public getMegaBalls(){

  this.lottoService.retrieveMegaBalls().subscribe((response:number[])=>{
this.megaBalls=response;
this.getGoldBall();

console.log(response);
  })
}

/**
 *get gold megaballs from service
 */
 public getGoldBall(){

  this.lottoService.retrieveGoldMegaBall().subscribe((response:number)=>{

this.goldBall=response;
console.log("==>"+response);
  })
}

/**
 *get gold megaballs from service
 */
 public getredBall(){

  this.lottoService.retrieveRedPowerBall().subscribe((response:number)=>{
this.redBall=response;

this.getPowerPlaysBalls();
  })
}

/**
 *gets powerPlay list from service
 */
public getPowerPlaysBalls() {
  this.lottoService.retrievePowerPlaysBall().subscribe((response: LottoPlay[]) => {
    this.lottoPly = response;

    // Clear the array in case this method is called multiple times
    this.powerBallSequences = [];
    this.redBallS=[]

    for (const lotto of this.lottoPly) {
      this.powerBallSequences.push(lotto.powerBallSequence);
      this.redBallS.push(lotto.redPowerBall);
    }
  });
}


}
