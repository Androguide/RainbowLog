RAINBOW LOG
============


This ultra-lightweight library _(only 196 bytes minified!)_ extends the javascript `console` object to provide configurable colored output.

![Screenshot](http://i.imgur.com/e36RL9q.png)

### Introduction  
3 color-schemes are defined by default, order by debug level:

  - ```console.e('your message')```: the **e** stands for **error**, this will output your message in white on red (see screenshots above).
  - ```console.s('your message')```: the **s** stands for **success**, this will output your message in white on green (see screenshots above).
  - ```console.i('your message')```: the **i** stands for **info**, this will output your message in white on teal (see screenshots above).

    
    
### Customization


##### 1) Custom CSS
You can pass any css property as a second argument:
```javascript
console.e('Big Error', 'font-size: 4em');
```
You can modify the default CSS properties for your log messages by locating & extending the following string with your properties, but add them to the left of the string so as to preserve the mutable background property:
```css
";color:#ecf0f1;background:"
```


##### 2) Color Schemes
You can very easily define more color-schemes by locating the following piece of code and:

  - adding your desired identifier & background-color to the corresponding arrays
  - incrementing the `i` variable to match the length of both inner arrays
```javascript
[["e","s","i"],["#c0392b","#2ecc71","#1abc9c"]],i=2
```
<br/>
**Example**:
Here we add a `console.menInBlack()` scheme which will output white on black text
```javascript
[["e","s","i","menInBlack"],["#c0392b","#2ecc71","#1abc9c", "#000"]],i=3
```


### Compatibility
This should work with any decently recent version of Chrome & Firefox
