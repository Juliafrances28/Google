let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let googlebookSeed = [
  {
    title: "The Chicken Sisters",
    authors: ["KJ Dell Antonia"],
    description:
      " In tiny Merinac, Kansas, Chicken Mimi's and Chicken Frannie's have spent a century vying to serve up the best fried chicken in the state - and the legendary feud between their respective owners, the Moores and the Pogociellos, has lasted just as long. No one feels the impact more than thirty-five-year-old widow Amanda Moore, who grew up working for her mom at Mimi's before scandalously marrying Frank Pogociello and changing sides to work at Frannie's. Tired of being caught in the middle, Amanda sends an SOS to Food Wars, the reality TV restaurant competition that promises $100,000 to the winner. But in doing so, she launches both families out of the frying pan and directly into the fire The last thing Brooklyn-based organisational guru Mae Moore, Amanda's sister, wants is to go home to Kansas. But when her career implodes, Food Wars becomes her chance to step back into the limelight. Mae is certain she can make the fading Mimi's look good - even if that pits her against Amanda and Frannie's. With a greedy producer stoking the flames, their friendly rivalry quickly turns into a game of chicken. Yet when family secrets become public knowledge, the sisters must choose: will they fight with each other, or for their heritage? After all, all's fair in love, and war, and chicken . . .",
    image:
      "https://books.google.com/books?id=hHK0DwAAQBAJ&printsec=frontcover&dq=the+chicken+sisters+Isbn&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwi1isOa2NjuAhUcEVkFHcpICHQQ6wEwAXoECAQQAQ#v=onepage&q=the%20chicken%20sisters%20Isbn&f=false,",
    link:
      "https://books.google.com/books?id=CzboDwAAQBAJ&dq=editions:Ug-cUol5OR0C&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiS2cfT2djuAhU1ElkFHTaSCnUQ6AEwAnoECAMQAg",
  },
  {
    title: " The Last Story of Mina Lee",
    authors: ["Nancy Jooyoun Kim "],
    description:
      "A REESE’S BOOK CLUB PICK INSTANT NEW YORK TIMES BESTSELLER Riveting and unconventional, The Last Story of Mina Lee traces the far-reaching consequences of secrets in the lives of a Korean immigrant mother and her daughter Margot Lee's ..",
    image:
      "https://books.google.com/books?id=cgvEDwAAQBAJ&printsec=frontcover&dq=editions:GsvOEKwlZUkC&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjY0rWU2tjuAhXET98KHRe6AbcQuwUwAHoECAYQBw#v=onepage&q&f=false",
    link:
      "https://books.google.com/books?id=nQTwDwAAQBAJ&dq=editions:GsvOEKwlZUkC&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjY0rWU2tjuAhXET98KHRe6AbcQ6wEwAXoECAUQAQ",
  },
  {
    title: "The Henna Artist",
    authors: ["Alka Joshi"],
    description:
      "Escaping from an abusive marriage, seventeen-year-old Lakshmi makes her way alone to the vibrant 1950s pink city of Jaipur. There she becomes the most highly requested henna artist-and confidante-to the wealthy women of the upper class. But trusted with the secrets of the wealthy, she can never reveal her own. Vivid and compelling in its portrait of one woman's struggle for fulfillment in a society pivoting between the traditional and the modern, The Henna Artist opens a door into a world that is at once lush and fascinating, stark and cruel.",
    image:
      "https://books.google.com/books?id=AvmUDwAAQBAJ&pg=PT365&dq=The+Henna+Artist&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiJ6O682tjuAhVLGFkFHR0nCKgQuwUwA3oECAYQBw#v=onepage&q=The%20Henna%20Artist&f=false",
    link:
      "https://books.google.com/books?id=JOXLDwAAQBAJ&dq=The+Henna+Artist&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiJ6O682tjuAhVLGFkFHR0nCKgQ6AEwAHoECAIQAg",
  },
  {
    title: "The Jetsetters",
    authors: ["Amanda Eyre Ward"],
    description:
      "In the vein of The Nest and The Vacationers, The Jetsetters is a delicious and intelligent novel about the courage it takes to reveal our true selves, the pleasures and perils of family, and how we navigate the seas of adulthood.",
    image:
      "https://books.google.com/books?id=xSLUDwAAQBAJ&printsec=frontcover&dq=Jettsetters&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjZvuHt2tjuAhVsMlkFHSDmCv0Q6AEwAXoECAgQAg#v=onepage&q&f=false",
    link:
      "https://books.google.com/books?id=rSlwyQEACAAJ&dq=editions:BmJE27Q4WcwC&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwjusNSC29juAhWDEVkFHd3jBeAQ6AEwAnoECAIQAg",
  },
  {
    title: "This Time Next Year",
    authors: ["Sophie Cousens"],
    description:
      "Quinn and Minnie are born on New Year's Eve, in the same hospital, one minute apart.Their lives may begin together, but their worlds couldn't be more different.Thirty years later they find themselves together again in the same place, at the same time.What if fate is trying to bring them together? Maybe it's time to take a chance on love...",
    image:
      "https://books.google.com/books?id=ulXVDwAAQBAJ&printsec=frontcover&dq=This+time+next+year&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwi_8cyS3djuAhW9F1kFHRdJBP4Q6AEwAXoECAMQAg#v=onepage&q=This%20time%20next%20year&f=false",
    link:
      "https://books.google.com/books?id=xEe7DwAAQBAJ&dq=editions:qxv2OnSqreUC&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwimsayk3djuAhXpEVkFHQkkD0wQ6AEwAnoECAEQAg",
  },
  {
    title: "The Proposal",
    authors: ["Jasmine Gulliory"],
    description:
      "When freelance writer Nikole Paterson goes to a Dodgers game in LA with her actor boyfriend, the last thing she expects is a scoreboard proposal. Saying no isn't difficult - they've only been dating for five months, and he can't even spell her name correctly. The hard part is having to face a stadium full of disappointed fans. At the game with his sister, Carlos Ibarra comes to Nik's rescue and rushes her away from a camera crew. He's even there for her when the video goes viral and Nik's social media goes crazy. Believing that neither of them are looking for anything serious, Nik embarks on an epic rebound with the handsome doctor, filled with food, fun, and fantastic sex. But when their glorified hookups start breaking the rules, will they be brave enough to admit what they're really feeling?",
    image:
      "https://books.google.com/books?id=vHJCDwAAQBAJ&printsec=frontcover&dq=The+proposal&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiyvJHF29juAhXsElkFHWC6ANEQ6AEwAXoECAYQAg#v=onepage&q=The%20proposal&f=false",
    link:
      "https://books.google.com/books?id=e5RCDwAAQBAJ&dq=editions:jiv755j8EZAC&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwia2NfZ29juAhUJGFkFHY4yA6EQ6AEwAnoECAIQAg",
  },
  {
    title: "One Day in December",
    authors: ["Josie Silver"],
    description:
      "One Day in December is a joyous, heartwarming and immensely moving love story to escape into and a reminder that fate takes inexplicable turns along the route to happiness.",
    image:
      "https://books.google.com/books?id=8D9wDwAAQBAJ&printsec=frontcover&dq=One+day+in+December&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiNyvft29juAhUIWN8KHSVBDlIQ6AEwAHoECAAQAg#v=onepage&q=One%20day%20in%20December&f=false",
    link:
      "https://books.google.com/books?id=MscwuQEACAAJ&dq=editions:TG5xY4FoiqQC&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwiuuon529juAhUOSN8KHVhQCEMQ6AEwAnoECAIQAg",
  },
];

db.GoogleBook.deleteMany({})
  .then(() => db.GoogleBook.collection.insertMany(googlebookSeed))
  .then((data) => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
