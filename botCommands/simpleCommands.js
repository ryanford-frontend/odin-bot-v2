const {registerBotCommand} = require('../botEngine.js');

registerBotCommand(/(?<=\s?)\/hug/, () => `⊂(´・ω・｀⊂)`);

registerBotCommand(/(?<=\s?)\/smart/, () => String.raw`f(ಠ‿↼)z`);

registerBotCommand(/(?<=\s?)\/lenny/, () => String.raw`( ͡° ͜ʖ ͡°)`);

registerBotCommand(/:fu:/, async (message) => {
  await message.reply('http://media.riffsy.com/images/636a97aa416ad674eb2b72d4a6e9ad6c/tenor.gif')
  return null;
});

registerBotCommand(/(?<=\s?)\/question\b/, () => `**It looks like you're trying to ask a question! Please give this page a read: https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603**`);

registerBotCommand(/(?<=\s?)\/data/, () => `**Please state your question in the form of a question! https://www.dontasktoask.com/**`);

registerBotCommand(/:fu:/, ({ data }) => {
  const user = data.fromUser.username;
  return `@${user} \n ![Not Nice](http://media.riffsy.com/images/636a97aa416ad674eb2b72d4a6e9ad6c/tenor.gif)`;
});

registerBotCommand(/\/sexpresso/, () => `https://i.gifer.com/8EC5.gif`);

registerBotCommand(/\peen/, ({author}) => {
  if (author.id == 418918922507780096) {
    return `https://media.giphy.com/media/K5IEMtDZHxQZy/giphy.gif`;
  }
});

registerBotCommand(/(?<=\s?)\/google\s+.+/, ({content}) => {
  const transform = content => {
    const query = content.split(' ').map(encodeURIComponent).join('+');
    return `**HERE YOU GO BABY >** <https://lmgtfy.com/?q=${query}>`;
  };

  const query = content.match(/\B\/google\s+(.+)/)[1];
  return `${transform(query)}`;
});
registerBotCommand(/(?<=\s?)\/fg\s+.+/, ({content}) => {
  const transform = content => {
    const query = content.split(' ').map(encodeURIComponent).join('+');
    return `**This is what you should have typed into Google >** <https://google.com/search?q=${query}>`;
  };

  const query = content.match(/\B\/fg\s+(.+)/)[1];
  return `${transform(query)}`;
});


registerBotCommand(/(?<=\s?)\/dab/, () => `https://tenor.com/view/bettywhite-dab-gif-5044603`);

registerBotCommand(
  /(?<=\s?)\/gandalf/,
  () => `http://emojis.slackmojis.com/emojis/images/1450458362/181/gandalf.gif`
);


registerBotCommand(/(?<=\s?)\/motivate/, () => {
  return `Don't give up! https://www.youtube.com/watch?v=KxGRhd_iWuE`;
});

registerBotCommand(/\/justdoit/, () => {
  return `What are you waiting for?! https://www.youtube.com/watch?v=ZXsQAXx_ao0`;
});

registerBotCommand(/\/pairs/, () => {
  return `**Find your coding partner here:** https://forum.theodinproject.com/c/pairs`;
});
