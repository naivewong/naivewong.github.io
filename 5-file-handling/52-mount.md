# `mount` {#mount}

All files accessible in Linux, are arranged in one big tree: the file hierarchy, rooted at /. These files can be spread out over several devices. The`mount`command mounts a storage device or filesystem to the file tree, making it accessible and attaching it to an existing directory structure Conversely, the umount command will detach it again.

The mount command mounts a storage device or filesystem, making it accessible and attaching it to an existing directory structure.

The umount command "unmounts" a mounted filesystem, informing the system to complete any pending read or write operations, and safely detaching it. Let us look some examples.

## Mount CD-ROM or DVD-ROM {#mount-cdrom-or-dvdrom}

```
sudo mount -t iso9660 -o ro /dev/cdrom /mnt/cdrom

```

`-t iso9660`specify the format of CD,`-o ro`means the device is read-only.`/dev/cdrom`is our CD/DVD device,`/mnt/cdrom`is our mount directory. Make sure the directory exist before mount.

## Mount .iso file {#mount-iso-file}

```
mount -t iso9660 -o loop /home/csci3150/myiso.iso /mnt/myiso

```

`-o loop`use loop device \(a pseudo-device that makes a file accessible as a block device\) to mount .iso file. After finish mount, you can see the contents of myiso.iso under /mnt/myiso directory.

