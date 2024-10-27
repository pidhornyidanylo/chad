# Login details

scenario #1 (have to connect to Shopify manually)

--- email: test@gmail.com
--- yourName: test
--- password: 1234QQQaaa!

scenario #2 (no need to connect to Shopify manually)

--- email: exists@gmail.com
--- yourName: exists
--- password: 1234QQQaaa!

# Data storage

All data stored in SessionStorage with actions through React Context. User data automaticly resets after redirecting to final greeting page, also you can manually reset it by clicking Reset button in the top right corner.

# Server response simulation

Handled with Promises and Timeouts
