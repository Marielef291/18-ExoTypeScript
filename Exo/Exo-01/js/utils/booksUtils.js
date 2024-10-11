export function createBook(t, a, nP) {
    return {
        title: t,
        author: a,
        pages: nP,
        isAvailable: true
    };
}
export function toggleAvailability(b) {
    if (b.isAvailable = false) {
        b.isAvailable = true;
    }
    else {
        b.isAvailable = false;
    }
}
