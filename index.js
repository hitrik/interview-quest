(function nestedList() {
  // Условие задачи:
  // Вам предоставлен вложенный список целых чисел NestedList. Каждый элемент представляет собой либо целое число, либо список, элементами которого также могут быть целые числа или другие списки.

  // Глубина целого числа - это количество списков, внутри которых оно находится. Требуется вывести сумму каждого целого числа в вложенном списке, умноженную на его глубину.

  // Примеры:
  // Ввод: nestedList = [[1,1],2,[1,1]]
  // Вывод: 10
  // Объяснение: четыре единицы имеют глубину 2, одна двойка at имеет глубину 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.

  // Ввод: nestedList = [0]
  // Вывод: 0

  function solution(list, deep = 1) {
    return list.reduce((sum, item) => {
      return typeof item === 'number'
        ? sum + item * deep
        : sum + solution(item, deep + 1);
    }, 0);
  }

  console.log(solution([[1, 1], 2, [1, 1]]));
  console.log(solution([]));
})();

(function majorElement() {
  // Условие задачи:
  // Дан массив nums размера n. Требуется вернуть мажоритарный элемент.
  // Мажоритарный элемент - это элемент, который появляется более n / 2 раз. Вы можете быть уверены, что мажоритарный элемент всегда существует в массиве.
  // Примеры:
  // Ввод: nums = [4,2,4]
  // Вывод: 4
  // Ввод: nums = [8, 8, 6, 6, 6, 8, 8]
  // Вывод: 8
  function solution(list) {
    const counting = list.reduce((result, num) => {
      let curr = result[num];
      result[num] = curr ? ++curr : 1;
      return result;
    }, {});
    const max = Math.max(...Object.values(counting));
    return Object.keys(counting).find((key) => counting[key] === max);
  }

  console.log(solution([8, 8, 6, 6, 6, 8, 8]));
  console.log(solution([4, 2, 4]));
})();
