const initContactsMap = () => {
  if (document.getElementById('contacts-map')) {
    // eslint-disable-next-line
    let map = L.map('contacts-map').setView([55.02857452340479, 82.9281499970608], 16);
    // eslint-disable-next-line
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    // eslint-disable-next-line
    let marker = new L.Marker([55.02857452340479, 82.9281499970608]);
    marker.addTo(map);
  }
};

export {initContactsMap};
