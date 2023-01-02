import menu1 from './trees.jpg'
import menu2 from './grass.jpg'
import menu3 from './water.jpg'

// Creating content for Home Page
function renderHome() {
    const homeTitle = document.createElement('h1');
    homeTitle.innerText = 'Baluran Home Cooking';

    const homeText = document.createElement('div');
    homeText.innerText = 'Leafy kitchen on the eastern tip of Java Island. Enjoy our native vegetables grown from volcanic soil.';

    const homeHours = document.createElement('div');
    const homeHoursTitle = document.createElement('h2');
    homeHoursTitle.innerText = 'Hours';
    const homeHoursList = document.createElement('li');

    const homeHoursSunday = document.createElement('ol');
    homeHoursSunday.innerText = 'Sunday: 8am - 8pm';
    const homeHoursMonday = document.createElement('ol');
    homeHoursMonday.innerText = 'Monday: 8am - 8pm';
    const homeHoursThursday = document.createElement('ol');
    homeHoursThursday.innerText = 'Thursday: 8am - 8pm';
    const homeHoursWednesday = document.createElement('ol');
    homeHoursWednesday.innerText = 'Wednesday: 8am - 8pm';
    const homeHoursTuesday = document.createElement('ol');
    homeHoursTuesday.innerText = 'Tuesday: 8am - 8pm';
    const homeHoursFriday = document.createElement('ol');
    homeHoursFriday.innerText = 'Friday: 8am - 8pm';
    const homeHoursSaturday = document.createElement('ol');
    homeHoursSaturday.innerText = 'Saturday: 8am - 11pm';
    homeHoursList.appendChild(homeHoursSunday);
    homeHoursList.appendChild(homeHoursMonday);
    homeHoursList.appendChild(homeHoursThursday);
    homeHoursList.appendChild(homeHoursWednesday);
    homeHoursList.appendChild(homeHoursTuesday);
    homeHoursList.appendChild(homeHoursFriday);
    homeHoursList.appendChild(homeHoursSaturday);

    homeHours.appendChild(homeHoursTitle);
    homeHours.appendChild(homeHoursList);

    const homeLocation = document.createElement('div');
    const homeLocationTitle = document.createElement('h2');
    homeLocationTitle.innerText = 'Location';
    const homeLocationText = document.createElement('span');
    homeLocationText.innerText = 'Green spot on eastern tip of Java Island';
    homeLocation.appendChild(homeLocationTitle);
    homeLocation.appendChild(homeLocationText);

    const mainAppend = document.createElement('main');
    mainAppend.id = 'replacable';
    mainAppend.appendChild(homeTitle);
    mainAppend.appendChild(homeText);
    mainAppend.appendChild(homeHours);
    mainAppend.appendChild(homeLocation);

    // console.log('hello home');

    return mainAppend;
}

function renderMenu() {
    const mainAppend = document.createElement('main');
    mainAppend.id = 'replacable';
    
    const menuContainer = document.createElement('div');
    menuContainer.classList = 'list';

    const menu1Container = document.createElement('div');
    const menu2Container = document.createElement('div');
    const menu3Container = document.createElement('div');

    const menu1Img = new Image();
    menu1Img.src = menu1;
    const menu2Img = new Image();
    menu2Img.src = menu2;
    const menu3Img = new Image();
    menu3Img.src = menu3;

    const menu1Txt = document.createElement('div');
    menu1Txt.innerText = 'Baluran Organic Trees';
    const menu2Txt = document.createElement('div');
    menu2Txt.innerText = 'Volacanic Dry Grass';
    const menu3Txt = document.createElement('div');
    menu3Txt.innerText = 'Fresh Water of Mountain';

    menu1Container.appendChild(menu1Img);
    menu2Container.appendChild(menu2Img);
    menu3Container.appendChild(menu3Img);
    
    menu1Container.appendChild(menu1Txt);
    menu2Container.appendChild(menu2Txt);
    menu3Container.appendChild(menu3Txt);

    menuContainer.appendChild(menu1Container);
    menuContainer.appendChild(menu2Container);
    menuContainer.appendChild(menu3Container);

    mainAppend.appendChild(menuContainer);

    // console.log('hello menu');

    return mainAppend;
}

function renderContact() {
    const mainAppend = document.createElement('main');
    mainAppend.id = 'replacable';

    const contactTitle = document.createElement('h1');
    contactTitle.innerText = 'Lets us know!';
    const contactText = document.createElement('div');
    contactText.innerText = 'Just send us email to baluran@easterntip.java';

    mainAppend.appendChild(contactTitle);
    mainAppend.appendChild(contactText);

    return mainAppend;
}

export {
    renderHome, renderMenu, renderContact,
}