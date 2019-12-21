# `stat` {#stat}

`stat`command displays the detailed status of a particular file or a file system.

## Display detailed status of a file.![](/assets/x.png) {#display-detailed-status-of-a-file}

## Display the status of a file system. {#display-the-status-of-a-file-system}

![](/assets/11.png)

## Details of Stat Command Output {#details-of-stat-command-output}

File: 'myfile' -- File name

* Size: 2086 -- File size in bytes
* Blocks: 8 --Total number of blocks used by this file.
* IO Block: 4096 --IO block size for this file
* regular file -- Indicates the file type
* Device: 801h/2049d -- Device number in hex and device number in decimal
* Inode: 820927 -- Inode number is a unique number for each file which is used for the internal maintenance by the file system.
* Links: 1 -- Number of links to the file
* Access: \(0666/-rw-rw-rw-\) -- Access specifier displayed in both octal and character format
* Uid: \( 1000/csci3150\) -- File owner’s user id and user name
* Gid: \( 1000/csci3150\) -- File owner’s group id and group name
* Access: 2016-11-05 10:49:53.773094791 +0800 -- Last access time of the file
* Modify: 2016-11-05 10:49:53.773094791 +0800 -- Last modification time of the file
* Change: 2016-11-05 10:49:53.777094791 +0800 -- Last change time of the inode data of that file



