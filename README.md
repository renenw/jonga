# jonga

> A fancy schmancy slideshow app

The app reads a list of photo files from a server, transforms the list, and then randomly displays the images. You can rotate, delete or rate the images. Five star images are shown five times more often than one star images!

In my case, our family photos are stashed on a Windows machine. The photos are displayed on a monitor in the living room. We use a remote control to delete, rotate or skip images.

# HOWTO

## Basics

This should work on almost any computer, but it was built specifically to run on a Raspberry Pi. I use a Raspberry Pi 3B, or thereabouts.

## The File List

On a Windows 10 computer, to generate the list of files, change to your Windows photos directory and enter:

`dir *.JPG /B /S /A-D > files.txt`

That runs very quickly. And, you might want to use Windows scheduler to keep automatically up-to-date.

In my case, I serve this file (files.txt) and the images from the Windows machine itself using these instructions.


## Kiosk Mode

I used these instructions: https://blog.gordonturner.com/2017/07/22/raspberry-pi-full-screen-browser-raspbian-july-2017/ to configure the Pi to boot straight into slideshow.

In essence, you need to:

1. Install: `sudo apt-get install -y unclutter x11-xserver-utils`
1. Edit `.config/lxsession/LXDE-pi/autostart`, adding the following to the end of that file:

```
@/usr/bin/chromium-browser --kiosk http://jonga.121.co.za
@unclutter
@xset s off
@xset s noblank
@xset -dpms
```

Per that blog post, those last four lines:

1. Hide the mouse cursor
1. Disable screen blanking
1. Disable Display Power Management Signaling (DPMS)

## Remote Control

To make the setup useful, we interact with it via a [remote control](https://www.adafruit.com/product/3092).

Which was, for the most part, easy enough to configure.

However, I needed to remap one of its buttons. And that took a while to get my head around.

I drew heavily on these two posts:

1. https://medium.com/@damko/a-simple-humble-but-comprehensive-guide-to-xkb-for-linux-6f1ad5e13450
1. http://xahlee.info/linux/linux_xmodmap_tutorial.html

Essentially, run `xev -event keyboard`. Press the button on the remote that needs to be remapped.

In my case, the output of `xev` was as follows:

```
KeyPress event, serial 25, synthetic NO, window 0x1e00001,
    root 0x25d, subw 0x0, time 370580, (-2,607), root:(0,673),
    state 0x0, keycode 166 (keysym 0x1008ff26, XF86Back), same_screen YES,
    XLookupString gives 0 bytes: 
    XmbLookupString gives 0 bytes: 
    XFilterEvent returns: False

KeyRelease event, serial 28, synthetic NO, window 0x1e00001,
    root 0x25d, subw 0x0, time 370628, (-2,607), root:(0,673),
    state 0x0, keycode 166 (keysym 0x1008ff26, XF86Back), same_screen YES,
    XLookupString gives 0 bytes: 
    XFilterEvent returns: False
```
You want the keycode. In this case: 166.

Armed with the keycode, remap 166 to "r" (rotoate) by adding the following to `/home/pi/.config/lxsession/LXDE-pi/autostart` (yip, the same one as above): 

```
xmodmap -e "keycode  166 = R"
```


## Web Server

https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md

## On Pi

In home directory:

rm -rf dist

## On Dev

scp -r dist pi@192.168.0.251:~/dist

## Back on Pi

sudo rm -rf /var/www/html/*
sudo mv dist/* /var/www/html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
