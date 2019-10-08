window.onload = () => {

    // MENU
    const CLS_MENU = 'menu';
    const CLS_MENU_BUTTON = 'menu--button';
    const CLS_MENU_ACTIVE = 'menu__active';
    const CLS_MENU_BUTTON_ACTIVE = 'menu--button__active';

    const btnMenu = document.querySelector('.' + CLS_MENU_BUTTON);
    const menu = document.querySelector('.' + CLS_MENU);

    btnMenu.onclick = () => {
        let btnMenuClasses = [...btnMenu.classList];
        if (btnMenuClasses.includes(CLS_MENU_BUTTON_ACTIVE)) {
            btnMenu.classList = btnMenuClasses.filter(cls => cls !== CLS_MENU_BUTTON_ACTIVE).join(' ');
            menu.classList = [...menu.classList].filter(cls => cls !== CLS_MENU_ACTIVE).join(' ');
        } else {
            btnMenu.classList = [btnMenuClasses, CLS_MENU_BUTTON_ACTIVE].join(' ');
            menu.classList = [...menu.classList, CLS_MENU_ACTIVE].join(' ');
        }
    }

    // SLIDER
    const CLS_SLIDER = 'slider';
    const CLS_SLIDE = 'slide';
    const CLS_SLIDE_ACTIVE = 'slide__active';
    const CLS_TAB = 'slider--tab';
    const CLS_TAB_ACTIVE = 'slider--tab__active';
    const ATTR_DURATION = 'data-duration';

    const sliders = document.querySelectorAll('.' + CLS_SLIDER);

    function removeClassFromElement(element, cls) {
        element.classList = [...element.classList].filter(c => c !== cls).join(' ');
    }

    function addClassToElement(element, cls) {
        element.classList = [...element.classList, cls].join(' ');
    }

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.' + CLS_SLIDE);
        const tabs = slider.querySelectorAll('.' + CLS_TAB);
        
        let index = 0;
        const time = slider.attributes[ATTR_DURATION].value || 3000;
        // const time = 3000;
        // console.log(slider.attributes[ATTR_DURATION].value);

        for (let i = 0; i < slides.length; i++) {
            removeClassFromElement(slides[i], CLS_SLIDE_ACTIVE);
            removeClassFromElement(tabs[i], CLS_TAB_ACTIVE);

            tabs[i].onclick = () => {
                removeClassFromElement(slides[index], CLS_SLIDE_ACTIVE);
                removeClassFromElement(tabs[index], CLS_TAB_ACTIVE)
                index = i;
                addClassToElement(slides[index], CLS_SLIDE_ACTIVE);
                addClassToElement(tabs[index], CLS_TAB_ACTIVE);
            }
        }

        addClassToElement(slides[index], CLS_SLIDE_ACTIVE);
        addClassToElement(tabs[index], CLS_TAB_ACTIVE);

        setInterval(() => {
            removeClassFromElement(slides[index], CLS_SLIDE_ACTIVE);
            removeClassFromElement(tabs[index], CLS_TAB_ACTIVE)
            index = index >= slides.length - 1 ? 0 : index + 1;
            addClassToElement(slides[index], CLS_SLIDE_ACTIVE);
            addClassToElement(tabs[index], CLS_TAB_ACTIVE);
        }, time);

    });
}