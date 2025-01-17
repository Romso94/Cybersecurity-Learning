

## Pour la persistance : 

> Avec python par exemple : 

```python 
Etape 1 : python -c 'import pty; pty.spawn("/bin/bash")'

Etape 2 : export TERM=xterm

Etape 3 : Ctrl + Z 

Etape 4 : stty raw -echo; fg
```
