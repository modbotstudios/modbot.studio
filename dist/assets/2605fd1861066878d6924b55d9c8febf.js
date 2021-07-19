/******************************** HEADER ********************************/

const header = document.querySelector('.header-8abamr')

// links
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
  }
]

// desktop header
const desktopHeader = document.createElement('div')
desktopHeader.classList.add('desktopWrapper-a43ttn')

const desktopRow = document.createElement('div')
desktopRow.classList.add('row-vuzyg4')

const desktopLogo = document.createElement('img')
desktopLogo.src = 'assets/c61ab46b98a5d3f8cc7f5d1be910ea5c.svg'
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

// commands
const commands = [
  {
    name: 'Play',
    icon: 'music_note',
    slash: '/play',
    description: 'Play a song or add it to the queue.'
  },
  {
    name: 'Stop',
    icon: 'stop',
    slash: '/stop',
    description: 'Stop the current playing song.'
  },
  {
    name: 'Skip',
    icon: 'skip_next',
    slash: '/skip',
    description: 'Skip the current song and play the next song in the queue.'
  },
  {
    name: 'Volume',
    icon: 'volume_up',
    slash: '/volume',
    description: 'Set the song volume.'
  },
  {
    name: 'Add a Word',
    icon: 'add',
    slash: '/addword <word>',
    description: 'Add a word to the blacklist.'
  },
  {
    name: 'Remove Word',
    icon: 'remove',
    slash: '/rmword <word>',
    description: 'Remove a word from the blacklist.'
  },
  {
    name: 'Ban User',
    icon: 'gavel',
    slash: '/ban <user>',
    description: 'Ban a user from your club.'
  },
  {
    name: 'Kick User',
    icon: 'person_remove',
    slash: '/kick <user>',
    description: 'Kick a user manually from your server.'
  },
  {
    name: 'Unban User',
    icon: 'person_add_alt',
    slash: '/unban <user>',
    description: 'Have accidentally banned a user? Unban them quickly!'
  },
  {
    name: 'User Details',
    icon: 'person_pin',
    slash: '/info <user>',
    description: 'Gives you detailed information about a user such as how many roles they have or when they joined the server.'
  },
  {
    name: 'Delete Messages',
    icon: 'delete',
    slash: '/purge <number>',
    description: 'Delete a certain number of messages in the text channel of your choice.'
  },
  {
    name: 'Blacklist User',
    icon: 'person_off',
    slash: '/blacklist',
    description: 'There\'s a user who is especially stressing your nerves again today? No problem, just blacklist him!'
  },
  {
    name: 'Create Channel',
    icon: 'add',
    slash: '/new',
    description: 'Create a simple text channel quickly & easily.'
  },
  {
    name: 'Remove Channel',
    icon: 'clear',
    slash: '/delete',
    description: 'Delete an entire voice or text channel in a few seconds.'
  },
  {
    name: 'Set Prefix',
    icon: 'sell',
    slash: '/prefix',
    description: 'Set the prefix for commands on your server. Please keep in mind that it is useful to select a character that a user can easily locate on his keyboard.'
  },
  {
    name: 'Generate Invite',
    icon: 'group_add',
    slash: '/invite',
    description: 'Need to invite one of your friends quickly, but have no invitation again? modbot will create you a permanent invite link without any limits in just a few seconds.'
  },
  {
    name: 'Whitelist',
    icon: 'checklist',
    slash: '/whitelist',
    description: 'Prevent team members from being punished or add exceptions.'
  },
  {
    name: 'Help',
    icon: 'contact_support',
    slash: '/help',
    description: 'Displays a list of all available commands of modbot and give you full info about each command.'
  },
  {
    name: 'Infractions',
    icon: 'format_list_numbered',
    slash: '/infractions',
    description: 'Shows how many rule violations a user has.'
  },
  {
    name: 'Clear Infractions',
    icon: 'clear_all',
    slash: '/clearall',
    description: 'Deletes all infractions of a user.'
  },
  {
    name: 'Toggle Filter',
    icon: 'filter_alt',
    slash: '/filter',
    description: 'Toggle the insult filter on your server with just one command.'
  },
]

const commandCount = document.querySelector('.commandCount-zfgig7')
if (commandCount) {
  commandCount.innerHTML = commands.length
}

// generate commands
const commandWrapper = document.querySelector('.commands-9slccp')

commands.forEach((command) => {
  const item = document.createElement('div')
  item.classList.add('item-cxxsw2')

  const container = document.createElement('div')
  container.classList.add('container-fzk1me')

  const accordion = document.createElement('div')
  accordion.classList.add('accordion-dy5byx')

  const icon = `<i class="material-icons-round">${command.icon}</i>`
  const name = `<h3>${command.name}</h3>`
  const slash = `<span>${command.slash}</span>`

  accordion.innerHTML += icon + name + slash

  const panel = document.createElement('div')
  panel.classList.add('panel-btcxs5')
  
  const description = document.createElement('p')
  description.innerHTML = command.description

  panel.appendChild(description)
  container.appendChild(accordion)
  container.appendChild(panel)
  item.appendChild(container)
  commandWrapper.appendChild(item)
})

// accordions
const accordions = document.querySelectorAll('.accordion-dy5byx')

if (accordions) {
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
      this.classList.toggle('active-x08em9')
      const panel = this.nextElementSibling

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`
      }
    })
  })
}