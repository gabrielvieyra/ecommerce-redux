interface User {
  uid: string;
  username: string;
}

export function getUser(): User {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502',
  };
}

export function getUserActive(name: string): User {
  return {
    uid: 'ABC567',
    username: name,
  };
}
