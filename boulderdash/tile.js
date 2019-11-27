class Tile {
    constructor(type) {
        if(!type) {
            throw new Error('Give me some tile type!')
        }

        this.type = type

        this.initializeColors()
        this.setColor(type) 
    }
         setColor(type){
             this.color = this.colors[type]
        }


    initializeColors() {
        this.colors = {
            [tileTypes.empty]: '#222',
            [tileTypes.stone]: '#a33',
            [tileTypes.wall]: '#777',
            [tileTypes.diamond]: '#88f',
            [tileTypes.sand]: '#678',
        }
    }
}