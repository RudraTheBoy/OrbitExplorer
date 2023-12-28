document.addEventListener('DOMContentLoaded', function () {
    // Get references to the destination items
    const moon = document.getElementById('moon');
    const mars = document.getElementById('mars');
    const europa = document.getElementById('europa');
    const titan = document.getElementById('titan');

    // Get references to the destination information elements
    const destinationPicture = document.querySelector('.destinationPicture');
    const destinationName = document.querySelector('.destinationName');
    const destinationDescription = document.querySelector('.destinationDescription');
    const destinationDst = document.querySelector('.destinationDst .dstAmt');
    const destinationDuration = document.querySelector('.destinationDuration .time');

    // Function to update destination information
    function updateDestinationInfo(pic, name, description, distance, duration) {
        destinationPicture.src = pic;
        destinationName.textContent = name;
        destinationDescription.innerHTML = description.replace(/\n/g, '<br>');
        destinationDst.textContent = distance;
        destinationDuration.textContent = duration;
    }

    // Event listener for the 'click' event on the destination items
    moon.addEventListener('click', function () {
        removeDestinationIndicator();
        moon.classList.add('destinationIndicator');
        updateDestinationInfo(
            'assets/destination/image-moon.png',
            'Moon',
            'See our planet as you’ve never seen it before. A perfect \n relaxing trip away to help regain perspective and come back refreshed.While you’re there, take in some history by visiting the Luna 2 and Apollo 11 \n landing sites.',
            '384,400 km',
            '3 days'
        );
    });

    mars.addEventListener('click', function () {
        removeDestinationIndicator();
        mars.classList.add('destinationIndicator');
        updateDestinationInfo(
            'assets/destination/image-mars.png',
            'Mars',
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.\n It’s two and a half times the size of Everest!',
            '225 million km',
            '6-9 months'
        );
    });

    europa.addEventListener('click', function () {
        removeDestinationIndicator();
        europa.classList.add('destinationIndicator');
        updateDestinationInfo(
            'assets/destination/image-europa.png',
            'Europa',
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a \n winter lover’s dream. With an icy surface, it’s perfect for a bit of \n ice skating, curling, hockey, or simple relaxation in your snug \n wintery cabin.',
            '628 million km',
            '2-3 years'
        );
    });

    titan.addEventListener('click', function () {
        removeDestinationIndicator();
        titan.classList.add('destinationIndicator');
        updateDestinationInfo(
            'assets/destination/image-titan.png',
            'Titan',
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            '1.6 billion km',
            '6-7 years'
        );
    });

    // Function to remove 'destinationIndicator' class from all destination items
    function removeDestinationIndicator() {
        moon.classList.remove('destinationIndicator');
        mars.classList.remove('destinationIndicator');
        europa.classList.remove('destinationIndicator');
        titan.classList.remove('destinationIndicator');
    }
});
