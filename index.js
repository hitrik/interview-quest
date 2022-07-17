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

(function shortestSubsctring() {
  // Для заданной строки s найдите длину самой длинной подстроки без повторяющихся символов.

  // Примеры:
  // Ввод: s = "abcabcbb"
  // Вывод: 3
  // Объяснение: Ответ "abc" длиной 3.

  // Ввод: s = "bbbbb"
  // Вывод: 1
  // Объяснение: Ответ "b" длиной 1.

  // Ввод: s = "pwwkew"
  // Вывод: 3
  // Объяснение: Ответ "wke" длиной 3.
  // Обратите внимание, что ответ должен быть подстрокой, «pwke» — это подпоследовательность, а не подстрока.

  function solution(str) {
    let variants = [];
    let result = '';
    for (let index = 0, len = str.length; index < len; index++) {
      const char = str[index];
      if (result.includes(char)) {
        variants.push(result);
        result = char;
      } else {
        result += char;
        if (index === str.length - 1) {
          variants.push(result);
        }
      }
    }
    return Math.max(...variants.map((v) => v.length));
  }

  console.log(solution('abcabcbb'));
  console.log(solution('pwwkew'));
  console.log(solution('bbbb'));
})();

(function uniqueElement() {
  //   Условие задачи:
  // Дан непустой массив целых чисел nums, каждый элемент появляется дважды, за исключением одного. Найдите этот самый единственный элемент.
  // Вы должны реализовать решение с линейной сложностью и использовать только постоянное дополнительное пространство.
  //   Пример:
  // Ввод: nums = [8, 8, 6]
  // Вывод: 6
  // Ввод: nums = [4, 1, 2, 1, 2]
  // Вывод: 4

  function solution(list) {
    let collect = list.reduce((counter, item, index) => {
      counter[item] = counter[item] ? counter[item] + 1 : 1;
      return counter;
    }, {});
    const [[result]] = Object.entries(collect).filter(([k, v]) => {
      return v === 1;
    });
    return result;
  }

  console.log(solution([8, 8, 6]));
  console.log(solution([4, 1, 2, 1, 2]));
  console.log(solution([4, 5, 2, 1, 2, 1, 4, 7, 7, 7]));
})();
