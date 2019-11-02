module.exports = (input) => {
  const Slack = require('slack-node');
  let slack = new Slack();
  
  slack.setWebhook(process.env.webhook);

  //TODO: move and improve sanitizing into a factory
  let data = '*New Contact*\n' +
    input.replace(/%40/g, '@')
      .replace(/%20/g, ' ')
      .split('&')
      .join('\n');
  
  slack.webhook({
    channel: 'new-business',
    username: "webhookbot",
    icon_emoji: ":ghost:",
    text: data,
  },
    function (err, response) {
      if (err) console.log(err);
      console.log('post res ', response);
    }
  );
}