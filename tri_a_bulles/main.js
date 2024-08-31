let result = [];

function tri(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < tab[i] + 1) {
            result.push(tab[i]);
        } else {
            result.push(tab[i] + 1);
        }
    }
}
tri([5, 2, 8, 1]);
console.log(result);