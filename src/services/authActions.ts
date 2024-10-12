'use server';

async function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function handleLogin(password: string) {
  const correct = process.env.PAGE_PASSWORD === password;
  if (correct) return correct;
  await sleep(2000);
  return false;
}
