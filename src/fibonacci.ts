
export const computeFibonacciNumber = (position: number | null): number => {
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;   
    }

    if (notNullPosition <= 2) {
        return 1;
    }

    let smallFibonacciNumber = 1;
    let largeFibonacciNumber = 1;

    let currentPosition = 2;
    while (currentPosition < position) {
        const nextFibonacciNumber = smallFibonacciNumber + largeFibonacciNumber;
        smallFibonacciNumber = largeFibonacciNumber;
        largeFibonacciNumber = nextFibonacciNumber;
        currentPosition++;
    }
    return largeFibonacciNumber;
};
