//your JS code here. If required.
function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

document.getElementById('band').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
