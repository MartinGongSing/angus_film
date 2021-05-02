export class FilmService{
    films = [
        {
          name: 'Mamma Mia',
          genre: 'Comedy',
          available: 'V'
        },
        {
          name: 'Shrek',
          genre: 'Animation',
          available: 'X'
        },
        {
          name: 'LOTR',
          genre: 'Fantasy',
          available: 'V'
        },
        {
          name: 'Jaws',
          genre: 'Acteurs',
          available: 'V'
        },
        {
          name: 'Starwars',
          genre: 'Fantasy',
          available: 'V'
        },
      ];

    takeOne(index:number){
        this.films[index].available='X'
    }
    bringOne(index:number){
        this.films[index].available='V'
    }

}