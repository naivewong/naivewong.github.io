# Add Shared Folder Settings {#add-shared-folder-settings}

Add a new folder in the machine setting:

Select "Machine" &gt; "Settings" &gt; "Shared Folders". Click the "Adds new shared folder" button on the right.

![](/assets/l.png)

Create a folder named "shared" on host OS and set it as a shared folder named "shared" for the VM.

**Remember to check both "Auto-mount" and "Make Permanent"**

![](/assets/m.png)

After adding the folder, you shall see an entry added to the list of shared folders. Click "OK" to confirm.

![](/assets/n.png)

Back to the VM, add "csci3150" to the group "vboxsf" by executing the following command in a terminal.

`$ sudo usermod -a -G vboxsf csci3150`![](/assets/o.png)Reboot the VM. VirtualBox will then automatically mount the shared folder inside the VM for you upon boot.

After the machine reboots, open a terminal and execute the following command to check if the folder is mount .

`$ mount`

![](/assets/p.png)

You shall found the line,`shared on /media/sf_shared type vboxsf (gid=999,rw)`, which tells you that the shared folder is mounted on the local folder`/media/sf_shared`.

Let try using the shared folder by creating an empty document in the folder on the host OS, e.g. "hello.txt". After creating the file, your shall see the file inside your VM.

![](/assets/q.png)

Then, write some content to "hello.txt" in VM using any text editor, e.g.`nano`\(save by pressing "Ctrl"+"x" followed by "Y", and press "Enter"\).

Check if the new content is reflected on the host OS.

