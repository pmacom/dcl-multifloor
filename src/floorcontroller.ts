import { FirstFloor, SecondFloor, ThirdFloor } from "./base"
import { movePlayerTo } from '@decentraland/RestrictedActions'

export const floorTeleportLocations = [
    [{ x: 11.46, y: 0.88, z: 7.7 }, { x: 9, y: 0.88, z: 7.7 }], // 0 
    [{ x: 11.46, y: 5.33, z: 7.7 }, { x: 9, y: 5.33, z: 7.7 }], // 1
    [{ x: 11.46, y: 9.68, z: 7.7 }, { x: 9, y: 9.68, z: 7.7 }], // 2
]

class FloorController {
    public firstfloor = new FirstFloor()
    public secondfloor = new SecondFloor()
    public thirdfloor = new ThirdFloor()
    public floors: Entity[] = []
    public currentFloor: number = 0
  
    constructor(){
      this.floors.push(
        this.firstfloor,
        this.secondfloor,
        this.thirdfloor
      )
      this.showFloor(0)
    }

    goUp(){
        this.currentFloor++
        if(this.currentFloor >= this.floors.length){
            this.currentFloor = 0
        }
        this.showFloor(this.currentFloor)
        const [location, direction] = floorTeleportLocations[this.currentFloor]
        movePlayerTo(location, direction)
    }

    goDown(){
        this.currentFloor--
        if(this.currentFloor < 0){
            this.currentFloor = this.floors.length-1
        }
        this.showFloor(this.currentFloor)
        const [location, direction] = floorTeleportLocations[this.currentFloor]
        movePlayerTo(location, direction)
    }
  
    showFloor(id: number){
      this.floors.forEach((floor, index) => {
        if(id == index){
          engine.addEntity(floor)
        }else{
          engine.removeEntity(floor)
        }
      })
    }
  }

  export const floorController = new FloorController()
  