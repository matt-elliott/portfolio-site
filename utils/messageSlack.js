module.exports = (input) => {
  const Slack = require('slack-node');
  let slack = new Slack();
  console.log('\n', input,'\n');
  slack.setWebhook('https://hooks.slack.com/services/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');

  input.replace('%40', '@');

  let data = '*New Contact*\n' + input.split('&').join('\n');
  
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