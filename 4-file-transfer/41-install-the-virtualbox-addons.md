# Install the Virtualbox Addons {#install-the-virtualbox-addons}

To use the file transfer function, you need to first install the "Guest Additions". This is the driver that allows the guest OS "XUbuntu" to be aware of the host environment.

**We have done for you in the course VM. If you wish to test it in other Linux VM, you can follow the steps.**

Select "Device" &gt; "Insert Guest Additions CD image ...".

![](/assets/j.png)

Double Click the CD-ROM icon on the desktop to open the file explorer.Then right click at the blank region and select "Open Terminal Here".![](/assets/k.png)Then type

```
sudo ./VBoxLinuxAdditions.run
```

Enter the`csci3150`password and follow the instruction.

