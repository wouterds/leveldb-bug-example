(async () => {
  console.log('Hello world');
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('Loading level');
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const level = require('level');

    console.log('Initializing level');
    await new Promise(resolve => setTimeout(resolve, 1000));
    const db = level('my-db');
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Storing value');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await db.put('time', new Date().toISOString());

    console.log('Reading value');
    await new Promise(resolve => setTimeout(resolve, 1000));
    const value = await db.get('time');
    console.log({ value });
  } catch (e) {
    console.log(e);
    return;
  }

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('OK');
})();
