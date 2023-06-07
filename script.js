const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 
    'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig','Belloc, Hilaire', 
    'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 
    'Benjamin, Walter', 'Berlin, Irving','Benn, Tony', 'Benson, Leana', 'Bent, Silas', 
    'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 
    'Black, Elk', 'Berio, Luciano','Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin',
    'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  const result = inventors.filter((inventor) => inventor.year >= 1500 & inventor.year <= 1599) 


  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names

  const firstAndLast = inventors.map(inventor =>  `${inventor.first} ${inventor.last}`)
 

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  // const dob = inventors.sort((a, b) => a.year - b.year)
  const dob = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

 

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

  const sumYears = inventors.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.passed - currentValue.year)
  }, 0)
  
  // 5. Sort the inventors by years lived

  const oldest = inventors.sort((a, b) => b.year - a.year)
  

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));
  // const text = links.map((link) => link.textContent)
  // const de = text.filter((val) => val.includes('de')).filter((val) => val.includes('clichy'))

  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const alpha = people.sort((a, b) => {
    const [aLast, aFirst] = a.split(', ');
    const [bLast, bFirst] = b.split(', ');
    return aLast > bLast ? 1 : -1
  })
  console.log(alpha);
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 
  'van', 'car', 'truck']

  const objOfData = data.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 0;
    }
    acc[val]++;
    return acc;
  }, {})

  // data.reduce()

   // 9.  Sum up the instances of each of these

   const colors = ['green', 'green', 'red', 'blue','red', 'red'];

   const objOfColor = colors.reduce((acc, color) => {
      if(!acc[color]) {
        acc[color] = 0;
      }
      acc[color]++
      return acc;
   }, {})


   // convert a 2d array into an object of key value pairs;

   const keyValuePairs = [
    ['userName', 'samuelJustus'],
    ['memberSince', '2002-04-07'],
    ['age', '21'],
    ['nationality', 'nigeria'],
    ['gender', 'male']
   ];

   const obj = keyValuePairs.reduce((acc, keyValuePair) => {
      const key = keyValuePair[0]
      const value = keyValuePair[1];

      acc[key] = value;
      return acc;
   }, {});
   console.log(obj)

   
   const persons = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const older = persons.some((person) => {
    const currentYear = new Date().getFullYear()
    if (currentYear - person.year >= 19) return true;
  });
  console.log(older);
  // Array.prototype.every() // is everyone 19 or older?
  const everyOneOlder = persons.every((person) => {
    const currentYear = new Date().getFullYear()
    if (currentYear - person.year >= 19) return true;
  })
  console.log(everyOneOlder)


  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const answer = comments.find((comment) => comment.id == '823423')
  console.log(answer);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const index = comments.findIndex((comment) => comment.id === 823423)
  comments.splice(1,1);
  console.log(comments);
