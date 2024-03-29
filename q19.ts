//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itcourse {
    courseName : string ;
    location : string ;
    onSiteStudents : number ;
}

let itcourse = {
    courseName : "Typescript and JavaScript",
    location : "Governor House Sindh",
    onSiteStudents : 50000,
}
console.log(itcourse);