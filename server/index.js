const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment/fortune", (req,res) => {
  const fortune = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A fresh start will put you on your way.', 'A friend asks only for your time not your money.', 'A friend is a present you give yourself.', 'A gambler not only will lose what he has, but also will lose what he doesn’t have.', 'A golden egg of opportunity falls into your lap this month.', 'A good friendship is often more important than a passionate romance.', 'A hunch is creativity trying to tell you something.', 'A lifetime friend shall soon be made.', 'A lifetime of happiness lies ahead of you.', 'A light heart carries you through all the hard times.', 'A person of words and not deeds is like a garden full of weeds.', 'A pleasant surprise is waiting for you.', 'A short pencil is usually better than a long memory any day.', 'A small donation is call for. It’s the right thing to do.', 'A smile is your personal welcome mat.', 'A smooth long journey! Great expectations.', 'A soft voice may be awfully persuasive.', 'A truly rich life contains love and art in abundance.', 'Accept something that you cannot change, and you will feel better.', 'Adventure can be real happiness.', 'Advice, when most needed, is least heeded.', 'All the effort you are making will ultimately pay off.', 'All the troubles you have will pass away very quickly.', 'All will go well with your new project.', 'All your hard work will soon pay off.', 'Allow compassion to guide your decisions.', 'Competence like yours is underrated.', 'Do not underestimate yourself. Human beings have unlimited potentials.', 'Don’t just spend time. Invest it.', 'Each day, compel yourself to do something you would rather not do.', 'Never fear! The end of something marks the start of something new.']
  
  let randomIndex = Math.floor(Math.random()*fortune.length)
  let randomFortune = fortune[randomIndex]
  
  res.status(200).send(randomFortune)
})

app.get("/api/compliment/compliment", (req,res) => {
  const compliments = ["Gee, you're a smart cookie!",
           "Cool shirt!",
           "Your Javascript skills are stellar.",
  ];
  let randomIndexs = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndexs];

  res.status(200).send(randomCompliment);
})




app.listen(4000, () => console.log("Server running on 4000"));
