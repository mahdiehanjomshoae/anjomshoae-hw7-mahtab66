class Media {
  constructor(name,YearOfPublication){
    this.name=name
    this.YearOfPublication=YearOfPublication

   }
  }
  class film extends Media{
    constructor(name,YearOfPublication,genre,time){
       super(name,YearOfPublication )
       this.genre=genre
       this.time=time
     }
     sayname(){
       console.log(`neme movie ? ${this.name} and genre movie ? ${this.genre}`)
     }
  }
  class Book extends Media{
    constructor(name,YearOfPublication,PrintSeries,NumberOfPages){
      super(name,YearOfPublication )
      this.PrintSeries=PrintSeries
      this.NumberOfPages=NumberOfPages
    }
  }
  class Music extends Media{
    constructor(name,YearOfPublication,time,nameSinger){
      super(name,YearOfPublication )
      this.time=time
      this.nameSinger=nameSinger
    }
  }
let NameMovie= new film("squid game","2021","Scary")
console.log(NameMovie)
NameMovie.sayname()
let NameBook= new Book("Nadia","1444","70")
console.log(NameBook.YearOfPublication)
let NameMusic= new Music("mmmm","2021","5min","BBBB")
console.log(NameMusic.nameSinger)
