// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const sectJson = {
  header: 'clase-header',
  footer: 'clase-footer',
  prueba: 'clase-prueba',
};

const arrayDeObjetos = [{ section: 'header' }, { section: 'footer' }];

const getSectionArray = (sectionObjectsArray: { section: string }[]) => {
  let result: string[] = [];

  result = sectionObjectsArray.map((x) => x.section);

  return result;
};

const getSectionsToHide = (sectionsObject: {}, sectionsArray: string[]) => {
  let result = Object.keys(sectionsObject).filter((x) =>
    sectionsArray.includes(x)
  );

  return result;
};

const getClassesToHide = (sectionsToHide: string[], sectionsObject: {}) => {
  const classes: string[] = [];

  for (let section of sectionsToHide) {
    classes.push(sectionsObject[section]);
  }

  return classes;
};

const sectionArray = getSectionArray(arrayDeObjetos);
const sectionsToHide = getSectionsToHide(sectJson, sectionArray);
const clasesToHide = getClassesToHide(sectionsToHide, sectJson);
console.log(clasesToHide);
