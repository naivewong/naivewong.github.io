# Command Manuals {#command-manuals}

It is a good habit to understand commands by looking into their manual page, e.g. find out the usage and options available for listing a directory,`$ man pow`.![](/assets/man.png)The `include<math.h>` tell us the header file needed when compiling

The `Link with -lm`tell us we need "-lm" when compiling program with math functions

Well, what does the number 3 mean in `POW(3)`?

Man pages are divided into sections. The number corresponds to what section of the manual that page is from; 1 is Executable programs or shell commands, while 3 is Library calls. The man page for man itself \(`man man`\) explains it and lists the standard ones:![](/assets/manpage.png)There are certain terms that have different pages in different sections \(e.g.`printf`as a command appears in section 1, as a library call appears in section 3\); in cases like that you can pass the section number to`man`before the page name to choose which one you want, or use`man -a`to show every matching page in a row:

```
$ man 1 printf
$ man 3 printf
$ man -a printf
```



