# auto-dir-creator: Automatic directory creation
This node.js script reads a given file (defaults to <code>dir.list</code>)
and creates a directory for every line in the file, under the out directory (defaults to <code>out</code>).

> Note: emtpy lines as well as commented lines starting with # are ignored.

## Disclaimer
Sure, this could have been done very easily with a shell script, but my main goal was to play around with [node.js' fs module](https://nodejs.org/api/fs.html).

## Usage
```
node app.js
```

## Example
The dir.list file includes all Marvel films (as of Feb 2022) in the recommended viewing order. Running the script on this file will create the following 27 directories:
```
01 Captain America - The First Avenger
02 Captain Marvel
03 Iron Man
04 The Incredible Hulk
05 Iron Man 2
06 Thor
07 Marvel's The Avengers
08 Iron Man 3
09 Thor - The Dark World
10 Captain America - The Winter Soldier
11 Guardians of the Galaxy
12 Guardians of the Galaxy Vol. 2
13 Avengers - Age of Ultron
14 Ant-Man
15 Captain America - Civil War
16 Black Widow
17 Spider-Man - Homecoming
18 Black Panther
19 Doctor Strange
20 Thor - Ragnarok
21 Ant-Man and the Wasp
22 Avengers - Infinity War
23 Avengers - Endgame
24 Spider-Man - Far From Home
25 Eternals
26 Shang-Chi and the Legend of the Ten Rings
27 Spider-Man - No Way Home
```