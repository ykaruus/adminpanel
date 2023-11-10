const btn = document.querySelector('#cadastrar')
const input = document.querySelector('input')
const slider = document.querySelector('.slider')
const slider_background = document.querySelector('.slider_background')

slider.addEventListener('click', () => {
    slider.classList.toggle('on')
    slider_background.classList.toggle('on')
    console.log('Click')
    if(getStateOfSwitch()) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }
})

function getStateOfSwitch()
{
    let state = false;
    if(slider.classList == 'slider on')
    {
        state = true
    }

    return state;
}