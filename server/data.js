const USERS = {
  'rick@rick.com': {
    email: 'rick@rick.com',
    name: 'Rick',
    password: 'asdf',
    img: 'rick.png'
  },

  'morty@morty.com': {
    email: 'morty@morty.com',
    name: 'Morty',
    password: 'asdf',
    img: 'morty.png'
  },

  'beth@beth.com': {
    email: 'beth@morty.com',
    name: 'Mom',
    password: 'asdf',
    img: 'beth.png'
  },

  'jerry@jerry.com': {
    email: 'morty@morty.com',
    name: 'Dad',
    password: 'asdf',
    img: 'jerry.png'
  },

  'summer@summer.com': {
    email: 'summer@morty.com',
    name: 'Summer',
    password: 'asdf',
    img: 'summer.png'
  },

  'snuffles@snuffles.com': {
    email: 'snuffles@morty.com',
    name: 'Snuffles',
    password: 'asdf',
    img: 'snuffles.png'
  }
}

const POSTS = [
  {
    from: 'rick@rick.com',
    to: 'morty@morty.com',
    content: 'That\'s what\'s gonna take us all the way to the end, Morty. Season - Nine more seasons, Morty. Nine more seasons until I get that dipping Szechuan sauce. What is that? For 97 more years, Morty! I want that McNugget sauce, Morty.'
  },
  {
    from: 'summer@summer.com',
    to: 'morty@morty.com',
    content: 'You\'re the little brother. You\'re not the cause of your parents misery, you\'re just a symptom of it.'
  },
  {
    from: 'rick@rick.com',
    to: 'morty@morty.com',
    content: 'What about the reality where Hitler cured cancer, Morty? The answer is: Don\'t think about it.'
  }, {
    from: 'rick@rick.com',
    to: 'morty@morty.com',
    content: 'Listen, Morty, I hate to break it to you but what people call "love" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science'
  },
  {
    from: 'beth@beth.com',
    to: 'jerry@jerry.com',
    content: 'He\'s not a hot girl. He can\'t just bail on his life and set up shop in someone else\'s.'
  },
  {
    from: 'summer@summer.com',
    to: 'rick@rick.com',
    content: 'What do you mean you\'re having a party? Are some Glipglups from the third dimension going to come over and play cards or something? '
  },
  {
    from: 'snuffles@snuffles.com',
    to: 'summer@summer.com',
    content: 'Where are my testicles, Summer?'
  },
  {
    from: 'jerry@jerry.com',
    to: 'summer@summer.com',
    content: 'What\' you doing? Watching some tv, playing on your phone?'
  },
  {
    from: 'jerry@jerry.com',
    to: 'summer@summer.com',
    content: 'Just making conversation.'
  },
  {
    from: 'morty@morty.com',
    to: 'jerry@jerry.com',
    content: 'You\'re missing the point, Dad... I don\'t want girls. I want Jessica!'
  },
  {
    from: 'rick@rick.com',
    to: 'jerry@jerry.com',
    content: 'Jerry, it\'s your house. Whatever you say it is how it is, but I think a blind man could see that Beth is looking for the door. I barely have a reason to care and even I noticed.'
  },
  {
    from: 'beth@beth.com',
    to: 'jerry@jerry.com',
    content: 'Were you born with your feet in your mouth?'
  },
  {
    from: 'jerry@jerry.com',
    to: 'beth@beth.com',
    content: 'Give me a break. We\'re not heroes for having unprotected sex on prom night.'
  },
  {
    from: 'rick@rick.com',
    to: 'morty@morty.com',
    content: 'It\'s a figure of speech, Morty! They\'re bureaucrats! I don\'t respect them. Just keep shooting, Morty! You have no idea what prison is like here!'
  },
  {
    from: 'rick@rick.com',
    to: null,
    content: 'Wubba lubba dub dub!'
  },
  {
    from: 'morty@morty.com',
    to: 'summer@summer.com',
    content: 'On one of our adventures, Rick and I basically destroyed the whole world, so we bailed on that reality and we came to this one, because in this one, the world wasn\'t destroyed and in this one, we were dead. So we came here, a- a- and we buried ourselves and we took their place. And every morning, Summer, I eat breakfast twenty yards away from my own rotting corpse.'
  },
  {
    from: 'morty@morty.com',
    to: 'summer@summer.com',
    content: 'And if you gotta take it some where, take it somewhere, you know, take it to the shit store and sell it, or put it in the shit museum. I don\'t care what you do, you just gotta get it together..... Get your shit together.'
  },
  {
    from: 'rick@rick.com',
    to: 'morty@morty.com',
    content: 'Morty! The principal and I have discussed it, a-a-and we\'re both insecure enough to agree to a three-way!'
  },
  {
    from: 'snuffles@snuffles.com',
    to: null,
    content: 'Snuffles was my slave name'
  },
  {
    from: 'morty@morty.com',
    to: null,
    content: 'Aw, man. I really liked this life. Well, at least I didn\'t really crap my pants.'
  },
  {
    from: 'rick@rick.com',
    to: 'morty@morty.com',
    content: 'No, no, that happened before you went to sleep, Morty. You\'re sleeping in your crap right now. Out of all the things that happened to you, that was the only real thing that, you know, is that you crapped your pants. I mean, it\'s a mess out there. I got some on my hands, Morty, and then I got it on the dream inceptor, and a piece fell in my mouth.'
  },
  {
    from: 'rick@rick.com',
    to: null,
    content: 'My new catchphrase is "I love my grandkids"... Psych, just kidding! My new catchphrase is "I don\'t give a f**k!'
  }
]

module.exports = {
  USERS,
  POSTS
}
