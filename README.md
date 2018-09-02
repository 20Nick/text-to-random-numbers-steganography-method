# text-to-random-numbers-steganography-method
A steganography method witch turns text to random numbers and that same random numbers to text.

# How does it work?
## Encoding
 It first has to change the text to binary, then It will check if the number is 1 or a 0. If it is a 1, then it will generate a number from a range of 5 - 9. If it is a 0 then it will genertate a number from a range 0 - 4.

## Decoding
 It will check if the number is between 5 - 9, Then that will be a 1, if it is between 0 - 4 then that is a 0.

# How to use it?

```javascript
  var encoded = encodeText("Hello World");
  var decoded = decodeText(encoded);
  console.log(encoded);
  console.log(decoded);
```

The output will be somthing like this.
```
4723602409522817256178000652650317638768248100130608096729726758299531700953870108713903
Hello World
```
