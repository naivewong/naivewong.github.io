# References {#references}

### Official guide on Ubuntu Desktop {#official-guide-on-ubuntu-desktop}

An easy and rich guide to the basics of Ubuntu Desktop:[https://help.ubuntu.com/14.04/ubuntu-help/index.html](https://help.ubuntu.com/14.04/ubuntu-help/index.html)

### Workaround for frequent error reporting popups {#workaround-for-frequent-error-reporting-popups}

In a terminal,

`$ sudo rm /var/crash/*`

\(Reference:[Online forum post](http://askubuntu.com/questions/133385/getting-system-program-problem-detected-pops-up-regularly-after-upgrade/369297)\)

### More on virtual machines {#more-on-virtual-machines}

#### How to create a VirtualBox VM from scratch: {#how-to-create-a-virtualbox-vm-from-scratch}

You may refer to the guide from VirtualBox:[https://www.virtualbox.org/manual/ch01.html\#gui-createvm](https://www.virtualbox.org/manual/ch01.html#gui-createvm)

#### Alternative\(s\) to VirtualBox {#alternatives-to-virtualbox}

There are other alternatives for hosting VMs on your own computer, e.g.[VMware](http://www.vmware.com/products/player.htm). The[VMware workstation player](https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/12_0)is free for download, however, it only runs on Windows and Linux.

#### Running 64-bit virtual machines {#running-64bit-virtual-machines}

If you want to create your own VM and install a 64-bit OS, you will need to enable the feature in the BIOS, namely VT-x for Intel processors, or AMD-v for AMD processors

* [Enable VT-x or AMD-v in BIOS setting](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Virtualization_Administration_Guide/sect-Virtualization-Troubleshooting-Enabling_Intel_VT_and_AMD_V_virtualization_hardware_extensions_in_BIOS.html)
* [Checklist on settings \(if enabling VT-x or AMD-v along does not work\)](https://forums.virtualbox.org/viewtopic.php?f=1&t=62339)



