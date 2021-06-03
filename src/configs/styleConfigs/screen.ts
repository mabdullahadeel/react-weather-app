interface ScreenSize {
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string,
}

interface SelectedDevice extends ScreenSize {
    desktopL: string
}

const size: ScreenSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '525px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}   

const device: SelectedDevice = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
}

export default device