# Teletext for Twitch
This application is going to add teletext-functionality to twitch streams via plugin.

## Install and Run
This application requires php to run (see `/content/jvpeek/store.php` for more details)
### dev
- clone repository
- cd into repository
- `php -S localhost:8080` (port doesn't matter)
- browse `localhost:8080`

### prod
- clone repository into a dir accessible by your php-capable webserver (apache for example)
- browse your dir on that webserver (you might need to specifically browse `/index.html` if your webserver isn't set up properly)

## Add Pages
- go to `/content/jvpeek/`
- copy `template.json` to `<teletext-address>.json`
- fill with content
- send PR with modified page

## test pages easily
- go to https://jvpeek.gitlab.io/teletext
- drag&drop your JSON file (see above) to your browser window
