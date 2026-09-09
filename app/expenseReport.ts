export class ExpenseReport {
  calculate(numbers: number[]) {

    let result;

    for(const number of numbers){
      for(const number2 of numbers) {
        if (number + number2 === 2020) {
          result = number * number2;
        }
      }
    }
    return result;
  }
}
