

export default function debouncer(f, delay) {
    let timer;
    return function(...args) {
        console.log(...args)
        clearTimeout(timer)
        timer = setTimeout(() => {
            f(...args)
            console.log("saved")
        }, delay)
    }
}