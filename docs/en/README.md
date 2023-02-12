<!--
 * @Author: kayleenaila
 * @Date: 2023-02-12 4:20:32
 * @LastEditTime: 2023-02-13 15:38:30
 * @LastEditors: kayleenaila 
 * @Description: Add detailed English documentation
 * @FilePath: /notion/README.md
-->
# [notion-widget](http://httishere.gitee.io/notion/)

## About

This repository offers a number of HTML widgets that can be embedded into Notion, the note-taking application. Our open-source project provides HTML files that can be used as embeds in a Notion page. The goal is to increase the organizational potential of a Notion page with customizable HTML files that can be easily used as an embed. 

## Instructions
1. Fork this project to form your own repository
2. Visit *Settings > Pages*
3. Under *Branch*, select "main" and click **Save**
    > a. Wait a couple minutes for GitHub to build your site
4. Refresh the page; you should see a banner stating **Your site is live at..** at the top of the page
5. Navigate to this link; you should now see a Directory page
6. Open the link to your chosen widget and copy the link
7. Navigate to your Notion page
8. Wherever you'd like your embed enter
    > /embed
9. Select the **Embed** option and paste the copied link into to *Embed link*
10. Hit **Enter** and wait a few seconds and VOILA! You have a custom widget!

## Troubleshooting

Is the widget you'd like not in the directory yet? No problem!
Instead of selecting the link from the directory page, at the end of your custom GitHub Page link, append "/<file-name>"

    NOTE: <file-name> is the full name (with extension) of the HTML file you would like to use as an embed.

Example: If you'd like to add "quote1.html" but you could not find it in the directory, the link would look like:
    ```https://yourusername.github.io/notion-widget/quote1.html```

## Want to customize your code even more?

We got you! You'll need to do bit of HTML coding for this, but it will make for an even fancier widget!

If you want to edit the code even further, you can open up the code of whichever widget you'd like to edit either in your favorite IDE (after performing ```git clone```) or right in GitHub.

You can type in whatever changes you'd like: wording, color, position, font, etc.

Once you complete the changes, be sure to [push](https://codepremix.com/how-to-push-code-to-github-using-git-bash#:~:text=Way%20to%20push%20code%20to%20GitHub%201%201.,5%205.%20Push%20changes%20in%20remote%20repository%20) the changes to your forked repository. This will update your page automatically so you do not need to go back and change the embed links on Notion!

## Features

-- 2022/08 v1.2.1 --

- [ ] Personalized business card
- [x] Calendar (multi-style)
- [x] Pomodoro clock
- [x] Disc clock

-- 2022/04/03 v1.2.0 --

- [x] Week start selection (Monday/Sunday)
  - [x] Blue week
  - [x] Calendar
  - [x] Select week
- [ ] Parameter encryption (Easy parameter decryption and Chinese support)
- [x] Clock style
- [ ] Chinese transliteration splicing
- [ ] Custom color / custom background
- [ ] Adaptive dark mode
- [ ] Loading speed
- [x] Picture bed problem (temporarily placed on GitHub)
- [x] Official adjustment of dark color

## Demos

- Countdown & Progress Bar:
    - [DEMO](http://httishere.gitee.io/notion/progress.html)

- Easy Date Countdown:
    - [DEMO](http://httishere.gitee.io/notion/days-matter.html)
    - Features: Custom target date and target day name
    - URL parameters: day (target date), name (target day name)

- Quote Block (multi-style):
  - Milky white font: suitable for short cases, large fonts, titles, etc., 
    - [DEMO](http://httishere.gitee.io/notion/quote.html?text=test)

  - Border shadow copywriting: suitable for traditional and English copywriting, medium font, the font does not recognize some simplified characters:   
     - [DEMO](http://httishere.gitee.io/notion/quote2.html?text=test)

  - Fine text: suitable for traditional and English copywriting, medium font, the font does not recognize some simplified characters: 
    - [DEMO](http://httishere.gitee.io/notion/quote3.html?text=test)

  - Cute English handwriting (English-only): 
    - [DEMO](http://httishere.gitee.io/notion/quote-EN.html?text=test)

- Calendar
  - Range Calendar: Displays the calendar content of the given range, which needs to be given a start time and end time (currently only the current month is supported)
    - [DEMO](https://kayleenaila.github.io/notion-widget/calendar.html)
  - Current Calendar: Displays the month and day targeting for the current time
    - [DEMO](https://kayleenaila.github.io/notion-widget/calendarByWeek.html?start=2021/11/14&end=2021/11/28)

- Weather component (currently fixed to Hangzhou area): [Demo](https://kayleenaila.github.io/notion-widget/weather.html
    - Clicking widget will take you to weather site for Hangzhou area

## Contributing
To contribute, please create a fork of this repository and complete any changes there.
Once you have thoroughly tested code, you may raise a pull request to the branch labelled with the most recent version of our project.