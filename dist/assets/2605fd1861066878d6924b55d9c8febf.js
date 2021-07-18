/******************************** HEADER ********************************/

const header = document.querySelector('.header-8abamr')

const links = [
  {
    name: 'Commands',
    href: '/#commands'
  },
  {
    name: 'Donate',
    href: 'https://donatebot.io/checkout/782661120858259477',
    blank: true
  },
  {
    name: 'Support',
    href: 'https://discord.gg/9JMYFFy2Sn',
    blank: true
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'Add to Discord',
    href: '/invite'
  },
  {
    name: 'Dashboard',
    href: 'https://dash.modbot.studio'
  }
]

// desktop header
const desktopHeader = document.createElement('div')
desktopHeader.classList.add('desktopWrapper-a43ttn')

const desktopRow = document.createElement('div')
desktopRow.classList.add('row-vuzyg4')

const desktopLogo = document.createElement('img')
desktopLogo.src = 'assets/cedb2e559f67eeec54c54d6b7bb055b7.svg'
desktopLogo.alt = 'logo'

const desktopNavigation = document.createElement('nav')
desktopNavigation.classList.add('navigation-bklq8f')

const desktopButton = document.createElement('a')
desktopButton.classList.add('btn-wjr99i')
desktopButton.innerHTML = 'Dashboard'
desktopButton.href = 'https://dash.modbot.studio'

// mobile wrapper
const mobileHeader = document.createElement('div')
mobileHeader.classList.add('mobileWrapper-ynkqsv')

const mobileLogo = document.createElement('img')
mobileLogo.src = 'assets/cedb2e559f67eeec54c54d6b7bb055b7.svg'
mobileLogo.alt = 'logo'

const mobileIcon = document.createElement('i')
mobileIcon.classList.add('material-icons-outlined', 'showPopup-e9fypy')
mobileIcon.innerHTML = 'segment'

const mobilePopup = document.createElement('div')
mobilePopup.classList.add('mobilePopup-bgaqvw')

const mobileNavigation = document.createElement('nav')
mobileNavigation.classList.add('navigation-i34u31')

const mobileNavigationIcon = document.createElement('i')
mobileNavigationIcon.classList.add('material-icons-outlined', 'closePopup-gbkon9')
mobileNavigationIcon.innerHTML = 'close'

links.forEach((a) => {
  const link = document.createElement('a')
  link.innerHTML = a.name
  link.href = a.href

  if (a.blank == true) {
    link.target = '_blank'
  }

  desktopNavigation.appendChild(link)
})

links.forEach((a) => {
  const link = document.createElement('a')
  link.innerHTML = a.name
  link.href = a.href

  if (a.blank == true) {
    link.target = '_blank'
  }

  mobileNavigation.appendChild(link)
})

desktopRow.appendChild(desktopLogo)
desktopRow.appendChild(desktopNavigation)
desktopHeader.appendChild(desktopRow)
desktopHeader.appendChild(desktopButton)
header.appendChild(desktopHeader)
mobileHeader.appendChild(mobileLogo)
mobileHeader.appendChild(mobileIcon)
mobileNavigation.appendChild(mobileNavigationIcon)
mobilePopup.appendChild(mobileNavigation)
header.appendChild(mobileHeader)
header.appendChild(mobilePopup)

document.querySelector('.showPopup-e9fypy').addEventListener('click', function() {
  document.querySelector('.mobilePopup-bgaqvw').style.display = 'flex'
})

document.querySelector('.closePopup-gbkon9').addEventListener('click', function() {
  document.querySelector('.mobilePopup-bgaqvw').style.display = 'none'
})

/******************************** COMMANDS ********************************/

const commands = [
  {
    name: 'Play',
    slash: '/play',
    description: 'Play a song or add it to the queue.'
  },
  {
    name: 'Stop',
    slash: '/stop',
    description: 'Stop the current playing song.'
  },
  {
    name: 'Skip',
    slash: '/skip',
    description: 'Skip the current song and play the next song in the queue.'
  },
  {
    name: 'Volume',
    slash: '/volume',
    description: 'Set the song volume.'
  },
  {
    name: 'Add a Word',
    slash: '/addword <word>',
    description: 'Add a word to the blacklist.'
  },
  {
    name: 'Remove a Word',
    slash: '/rmword <word>',
    description: 'Remove a word from the blacklist.'
  },
  {
    name: 'Ban User',
    slash: '/ban <user>',
    description: 'Ban a user from your club.'
  },
  {
    name: 'Kick User',
    slash: '/kick <user>',
    description: 'Kick a user manually from your server.'
  },
  {
    name: 'Unban User',
    slash: '/unban <user>',
    description: 'Have accidentally banned a user? Unban them quickly!'
  },
  {
    name: 'User Details',
    slash: '/info <user>',
    description: 'Gives you detailed information about a user such as how many roles they have or when they joined the server.'
  },
  {
    name: 'Delete Messages',
    slash: '/purge <number>',
    description: 'Delete a certain number of messages in the text channel of your choice.'
  },
  {
    name: 'Blacklist User',
    slash: '/blacklist',
    description: 'There\'s a user who is especially stressing your nerves again today? No problem, just blacklist him!'
  },
  {
    name: 'Remove a Word',
    slash: '/rmword',
    description: 'Remove a word from the blacklist.'
  },
]

if (document.querySelector('.commands-9slccp')) {
  const commandWrapper = document.querySelector('.commands-9slccp')


}