function defangIPaddr(address: string): string {
  let defangIp = '';
  for (let char of address) {
    if (char === '.') {
      defangIp = defangIp + '[.]';
    } else {
      defangIp = defangIp + char;
    }
  }
  return defangIp;
}
