import { Component } from '@angular/core';

@Component({
    selector: 'tweet',
    template: `
        <a class="twitter-timeline"
            href="https://twitter.com/Crash_FANjp?ref_src=twsrc%5Etfw">
            Tweets by Crash_FANjp
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
        </script>
    `
})
export default class TweetComponent { }
