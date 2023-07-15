const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

/* FUNCTION TO STRIP A STRING OF 'THE', 'AN', 'A' */
function strip(name) {
  return name.replace(/^(a |the |an )/i, '').trim()
}

/* CREATE A SORTED NEW LIST */
const sortedBands = bands.sort((a,b) => (strip(a) > strip(b)) ? 1 : -1)

document.querySelector('#bands').innerHTML = 
    sortedBands
      .map(band => `<li>${band}</li>`)
      .join('')

