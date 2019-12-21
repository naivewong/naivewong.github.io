# Package installation {#package-installation}

Ubuntu uses [APT](https://help.ubuntu.com/community/AptGet/Howto) to manage packages. It automatically resolves and installs dependencies when a new package needs to be installed.

To install a package, e.g. "cowsay", type`$ sudo apt-get install cowsay`. Type "Y" to confirm the installation.![](/assets/16.png)For packages available on web in`.deb`, you can always download them and double-click to install.

**Beware that this VM runs on a 32-bit OS, which is corresponds to the architecture "i386". Choose packages built for the "i386" architecture, otherwise they won't install.**

