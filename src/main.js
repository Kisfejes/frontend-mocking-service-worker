import { worker } from './mocks/browser';

async function main() {
    console.log('1');
    await worker.start();
    console.log('2');
    console.log('fetch hellloo')
    fetch('/hello');
}

main();
