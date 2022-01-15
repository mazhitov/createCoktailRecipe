export class Cocktail {
  constructor(
    public id: string,
    public name: string,
    public img: string,
    public type: string,
    public description: string,
    public ingredients = [{name: '', amount: '', unit: ''}],
    public makeDescription: string,
  ) {
  }
}
