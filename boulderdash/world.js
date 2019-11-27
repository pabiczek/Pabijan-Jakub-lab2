class World {
    constructor(canvasId) {
        this.tiles = []
        this.tileSize = 50
        this.tileRows = 12
        this.tileInRow = 50
        this.tilesCount = this.tileRows * this.tileInRow

        this.initializeCanvas(canvasId)
        this.generateTiles()
        this.drawTilesToCanvas()
    }
    
    drawTilesToCanvas(){
        for(let y = 0; y < this.tileRows; y++){
            for(let x = 0; x < this.tileInRow; x++) {
                this.drawTile(x, y)
            }
        }
    }

    drawTile(x,y) {
        const tileColor = this.tiles[y][x].color
        this.ctx.fillStyle = tileColor
        const xPos = x * this.tileSize
        const yPos = y * this.tileSize
        this.ctx.fillRect(xPos, yPos, this.tileSize, this.tileSize)
    }

generateTiles() {
    for(let y = 0; y < this.tileRows; y++) {
        const row = []
        for(let x=0; x < this.tileInRow; x++) {
            const tileNumber = Math.floor(Math.random() * 4)
            let tile
            switch(tileNumber) {
                case 0:
                    tile = tileTypes.empty
                    break;
                case 1:
                    tile=tileTypes.sand
                    break;
                case 2:
                    tile=tileTypes.wall
                     break;
                 case 3:
                    tile=tileTypes.stone
                    break;
                case 4:
                    tile=tileTypes.diamond
                    break;
                
                             
                        
            }
            row[x] = new Tile(tile)
        }
        this.tiles[y] = row
    }
}

    initializeCanvas(canvasId) {
        if(!canvasId) {
            throw new Error('You have to pass canvas Id!')
        }
        this.canvas = document.querySelector(`#${canvasId}`)
        this.ctx = this.canvas.getContext('2d')
    }
}