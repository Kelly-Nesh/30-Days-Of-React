const c = console.log;

let getPersonInfo = (obj) => {
  const {
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages: [first, second, other],
  } = obj;
  c(
    `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skills}. He speaks ${
      (first, second)
    } and a little bit of ${other}.`
  );
};
const individual = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

getPersonInfo(individual);
