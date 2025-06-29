# Page snapshot

```yaml
- text:  You logged out of the secure area!
- link "×":
  - /url: "#"
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "Login Page" [level=2]
- heading "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." [level=4]:
  - text: This is where you can log into the secure area. Enter
  - emphasis: tomsmith
  - text: for the username and
  - emphasis: SuperSecretPassword!
  - text: for the password. If the information is wrong you should see error messages.
- text: Username
- textbox "Username"
- text: Password
- textbox "Password"
- button " Login"
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```