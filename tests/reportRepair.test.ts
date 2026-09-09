import { ExpenseReport } from '@/expenseReport'

/* Test list:
* [ ] Empty array,
* [ ] One item in array
* [ ] Two items in array that don't add up to 2020
* [x] Two items in array that do add up to 2020
* [ ] Three numbers in array with 1st and 3rd adding up to 2020
* [ ] Full list of numbers
*/

describe('report repair', () => {
  it('first two numbers add up to 2020', () => {
    const numbers = [1721,299];

    const result = new ExpenseReport().calculate(numbers);

    expect(result).toBe(514579)
  });

  it('returns value depending on the numbers input', () => {
    const numbers = [1000,1020];

    const result = new ExpenseReport().calculate(numbers);

    expect(result).toBe(1020000);
  });

  it('returns value depending on the first and third numbers', () => {
    const numbers = [1000,999,1020];

    const result = new ExpenseReport().calculate(numbers);

    expect(result).toBe(1020000);
  });

  it('returns value depending on the last two numbers', () => {
    const numbers = [232, 2, 23, 220, 1000, 999, 1020, 9324, 2832];

    const result = new ExpenseReport().calculate(numbers);

    expect(result).toBe(1020000);
  });

  it('does not check against itself', () => {
    const numbers = [232, 2, 2018, 220, 1010, 999, 123, 1012, 2832];

    const result = new ExpenseReport().calculate(numbers);

    expect(result).toBe(4036);
  });
});
