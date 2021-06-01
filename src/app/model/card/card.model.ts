export interface CardInterface {
  id: string;
  header: string;
  summary: string;
  description: string;
  title: string;
}


export class Card implements CardInterface {

  constructor(public id: string, public header: string, public summary: string, public description: string, public title: string) {
  }






}
