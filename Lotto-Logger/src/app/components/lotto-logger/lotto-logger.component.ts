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



 public powerBallSequences: (number[] | null)[] = [];
 public redBallS: (number[] | null)[] = [];
 public megaBallSequences: (number[] | null)[] = [];
 public goldMegaBalls: (number[] | null)[] = [];
 public isCompleteSeq: (boolean[] | null)[] = [];

/**
 *get powerball number from service
 */
public getPowerBalls(){

  this.lottoService.retrievePowerBalls().subscribe((response:number[])=>{
this.powerBalls=response;
this.getredBall();
this.getPowerPlaysBalls();

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
this.getMegaPlaysBalls();

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
    this.redBallS=[];
    this.isCompleteSeq=[]

    for (const lotto of this.lottoPly) {
      this.powerBallSequences.push(lotto.powerBallSequence);
      this.redBallS.push(lotto.redPowerBall);
      this.isCompleteSeq.push(lotto.isComplete)
      console.log(response);
    }
  });
}

/**
 *gets powerPlay list from service
 */
 public getMegaPlaysBalls() {
  this.lottoService.retrieveMegaPlaysBall().subscribe((response: LottoPlay[]) => {
    this.lottoPly = response;

    // Clear the array in case this method is called multiple times
    this.megaBallSequences=[];
    this.goldMegaBalls=[];

    for (const lotto of this.lottoPly) {

      this.megaBallSequences.push(lotto.megaBallSequence)
      this.goldMegaBalls.push(lotto.goldMegaBall);
      console.log(response);
    }
  });
}


}
