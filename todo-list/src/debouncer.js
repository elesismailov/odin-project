

export default function debouncer(f, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            f(...args)
        }, delay)
    }
}