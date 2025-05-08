const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click',() => {
    document.querySelector('.style-switcher').classList.toggle('open');
});
document.addEventListener('click', function(event) {
    const styleSwitcher = document.querySelector('.style-switcher');
    const toggleBtn = document.querySelector('.style-switcher-toggler');

    // Check if click was outside the style switcher and not on the toggle button
    if (!styleSwitcher.contains(event.target) && !toggleBtn.contains(event.target)) {
        console.log(event.target)
        styleSwitcher.classList.remove('open');
    }
});
addEventListener('scroll',() => {
    if( document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})
