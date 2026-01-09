# Gab classic

This is a firefox extension (sorry chrome users) to load the classic gab interface instead of the bloated react app they've replaced it with.

### Installation
- Launch firefox
- go to the releases page https://github.com/4v3ngR/gabclassic/releases
- download the latest release
- firefox should prompt to install
- install it

## Building from source
- checkout the repo
- cd to the gabclassic directory
- create an xpi file with `zip -r gabclassic.xpi assets background.js manifest.json`
- jump through the browser's hoops to be able to install an unsigned extension
- install the xpi

## Installing the source
- download the developer edition of firefox from [here](https://www.firefox.com/en-US/channel/desktop/developer/)
- close any existing firefox windows (if you're using firefox)
- extract the tarball
- launch the firefox executable from the extracted tarball
- within the firefox developer version, enter `about:config`
- search for `xpinstall.signatures.required` and ensure it is set to false
- restart the browser
- load the url `about:addons`
- click on "Extensions" (left panel) then settings (the cog on the right)
- click "Install Add-on from file..."
- select the gabclassic.xpi file created above
- click "open" and accept all the risks (you can always read the code if you want)

### Using
Once installed, loading https://gab.com/... should load the old UI.
If you get the new UI, try loading https://gab.com/home or just reload the page - it usually works for me.

Best of luck
