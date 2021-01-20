{
  const person = { name: "bob", age: 2 };

  console.log(person);

  const ledd = Person("ddd", 33);

  function Person(name, age) {
    return {
      name,
      age,
    };
  }
}
// shorthand property names

{
  const ellie1 = {
    name: "ellie",
    age: "14",
  };

  const name = "llll";
  const age = "333";

  const qwe = {
    name,
    age,
  };

  console.log(qwe);
}

// destructuring assignment
{
  const student = {
    name: "Anna",
    level: 4,
  };

  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // array

  const animals = ["pig", "dog"];

  {
    const first = animals[0];
    const second = animals[1];
  }
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

// psread Syntax

{
  const obj1 = { key: "key" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  console.log(array);

  const copyarray = [...array];
  console.log(copyarray);
  const copyarray2 = [...array, { key: "key3" }];
  console.log(copyarray2);

  const obj3 = { ...obj1 };
  console.log(obj3);
}

//Ternary Operator

{
  const isCat = true;
  {
    let component;
    if (isCat) {
      component = "ok";
    } else {
      component = "not";
    }
    console.log(component);
  }

  {
    const component = isCat ? "not" : "ok";
    console.log(component);
  }
}

// Optional chaining
{
  const person1 = {
    name: "ELlie",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "BOb",
      },
    },
  };
  const person23 = {
    name: "anna",
  };

  {
    function print(person) {
      console.log(person.job?.manager?.name); // &&
    }
    print(person23);
    print(person1);
  }
}

// Nullish Coalescing Operator
{
  const name = "Ellie";
  const userName = name || "guest";
  console.log(userName);

  const name1 = "";
  const userName2 = name1 ?? "guest";
  console.log(userName2);
}
