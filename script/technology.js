document.addEventListener('DOMContentLoaded', function () {
    // Get references to the destination items
    const launchVehicle = document.getElementById('launchVehicle');
    const spacePort = document.getElementById('spacePort');
    const spaceCapsule = document.getElementById('spaceCapsule');

    // Get references to the destination information elements
    const techpic = document.querySelector('.techpic');
    const techname = document.querySelector('.name');
    const about = document.querySelector('.about');

    // Function to update destination information
    function updateTechInfo(pic, name, description) {
        techpic.src = pic;
        techname.textContent = name;
        about.innerHTML = description.replace(/\n/g, '<br>');
    }

    // Event listener for the 'click' event on the destination items
    launchVehicle.addEventListener('click', function () {
        removeTechIndicator();
        launchVehicle.classList.add('technIndicator');
        updateTechInfo(
            'assets/technology/image-launch-vehicle-portrait.jpg',
            'Launch Vehicle',
            'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a \n payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our \n WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, \n it\'s quite an awe-inspiring sight on the launch pad!'
        );
    });

    spacePort.addEventListener('click', function () {
        removeTechIndicator();
        spacePort.classList.add('technIndicator');
        updateTechInfo(
            'assets/technology/image-spaceport-portrait.jpg',
            'Spaceport',
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, \n by analogy to the seaport for ships or airport for aircraft. Based in the \n famous Cape Canaveral, our spaceport is ideally situated to take advantage \n of the Earth’s rotation for launch.'
        );
    });

    spaceCapsule.addEventListener('click', function () {
        removeTechIndicator();
        spaceCapsule.classList.add('technIndicator');
        updateTechInfo(
            'assets/technology/image-space-capsule-portrait.jpg',
            'Space capsule',
            'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry \n capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where \n you\'ll spend your time during the flight. It includes a space gym, cinema, \n and plenty of other activities to keep you entertained.'
        );
    });

    // Function to remove 'destinationIndicator' class from all destination items
    function removeTechIndicator() {
        launchVehicle.classList.remove('technIndicator');
        spacePort.classList.remove('technIndicator');
        spaceCapsule.classList.remove('technIndicator');
    }
});
