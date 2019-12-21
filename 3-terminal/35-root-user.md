# The most powerful user, "_root_" {#the-most-powerful-user-root}

There is always an ultimate user "_root_" in Linux, who has the right to do everything. Since the password is not yet set for "root", it is impossible to login in as root. However, a "sudoer" user, which is "csci3150" in our case, may upgrade herself to "root" via the command`sudo`: execute`$ sudo su`followed by entering the password of "csci3150". Note that the ending character of the command prompt changes from`$`to`#`after`sudo`. To downgrade yourself back to "csci3150", execute`exit`. Also you can use a shortcuts`Ctrl`+`D`

![](/assets/i.png)

