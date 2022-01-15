export class Cocktail {
  constructor(
    public id: string,
    public name: string,
    public img: string,
    public type: string,
    public description: string,
    public ingredients = [{ingName: '', amount: 0, unit: ''}],
    public makeDescription: string,
  ) {
  }
}
