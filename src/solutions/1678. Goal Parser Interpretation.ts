function interpret(command: string): string {
  let word = '';
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      word = word + 'G';
    }

    if (command[i] === '(') {
      if (command[i + 1] === ')') {
        word = word + 'o';
        i++;
      }

      if (command[i + 1] === 'a') {
        word = word + 'al';
        i = i + 2;
      }
    }
  }

  return word;
}
