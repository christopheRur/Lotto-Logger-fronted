export interface LottoPlay{

  id: number;
  gameName: string;
  size: number;
  isComplete: boolean;
  goldMegaBall: number;
  megaBallSequence: number[];
  redPowerBall: number[] | null;
  powerBallSequence: number[] | null;
}
