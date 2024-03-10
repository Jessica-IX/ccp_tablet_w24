if (window.innerWidth >= 700) {
    var petsNavClicked = false;
    var recipesNavClicked = false;
    var travelNavClicked = false;

    document.addEventListener('click', function(event) {
        var target = event.target;

        if (target.matches('.pets-nav a')) {
            event.preventDefault();
            if (!petsNavClicked) {
                showDropdown(target);
            } else {
                hideDropdown(target);
            }
            petsNavClicked = !petsNavClicked;
        } else if (target.matches('.recipes-nav a')) {
            event.preventDefault();
            if (!recipesNavClicked) {
                showDropdown(target);
            } else {
                hideDropdown(target);
            }
            recipesNavClicked = !recipesNavClicked;
        } else if (target.matches('.travel-nav a')) {
            event.preventDefault();
            if (!travelNavClicked) {
                showDropdown(target);
            } else {
                hideDropdown(target);
            }
            travelNavClicked = !travelNavClicked;
        }
    });

    document.addEventListener('focusin', function(event) {
        var target = event.target;
        if (target.matches('.nav-button a')) {
            showDropdown(target);
        }
    });

    document.addEventListener('focusout', function(event) {
        var target = event.target;
        if (target.matches('.dropdown li:last-child a')) {
            hideDropdown(target);
        }
    });

    document.addEventListener('click', function(event) {
        var target = event.target;

        if (target.matches('.dropdown li a')) {
            hideDropdown(target);
        }
    });
    function showDropdown(anchor) {            
        var dropdown = anchor.parentElement.nextElementSibling;
        if (dropdown && dropdown.classList.contains('dropdown')) {
            dropdown.style.display = 'block';
        }

        if (dropdown.classList.contains('pets-dropdown')) {
            dropdown.style.gridArea = '2/2/3/3';
        }


        if (dropdown.classList.contains('recipes-dropdown')) {
            dropdown.style.gridArea = '2/3/3/4';
        }

        if (dropdown.classList.contains('travel-dropdown')) {
            dropdown.style.gridArea = '2/4/3/-1';
        }
    }

    function hideDropdown(anchor) {
        var dropdown = anchor.parentElement.parentElement;
        if (dropdown && dropdown.classList.contains('dropdown')) {
            dropdown.style.display = 'none';
        }
        if (dropdown && dropdown.classList.contains('navigation')) {
            anchor.parentElement.nextElementSibling.style.display = 'none';
        }
    }
}
