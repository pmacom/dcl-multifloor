export class Base extends Entity {

    constructor(){
        super()
        this.addComponent(new GLTFShape('models/base.glb'))
        this.addComponent(new Transform({
            position: new Vector3(0,0,0),
            rotation: new Quaternion().setEuler(0, 180, 0)
        }))
        engine.addEntity(this)
    }
}

export class FirstFloor extends Entity {
    public props: Entity[] = []

    constructor(){
        super()
        this.addComponent(new GLTFShape('models/firstfloor.glb'))
        this.addComponent(new Transform({
            position: new Vector3(0,0,0),
            rotation: new Quaternion().setEuler(0, 180, 0)
        }))

        this.setPaintings()
    }


    setPaintings(){
        const paintings = [0,1,2,3,4,5,6,7,8,9,10]
        paintings.forEach(id => {
            const painting = new Entity()
            painting.addComponent(new PlaneShape())
            painting.addComponent(new Transform({
                position: new Vector3(-4,1,-4-(id*.3))
            }))
            painting.setParent(this)
            this.props.push()
        })
    }
}

export class SecondFloor extends Entity {
    constructor(){
        super()
        this.addComponent(new GLTFShape('models/secondfloor.glb'))
        this.addComponent(new Transform({
            position: new Vector3(0,0,0),
            rotation: new Quaternion().setEuler(0, 180, 0)
        }))
    }
}

export class ThirdFloor extends Entity {
    constructor(){
        super()
        this.addComponent(new GLTFShape('models/thirdfloor.glb'))
        this.addComponent(new Transform({
            position: new Vector3(0,0,0),
            rotation: new Quaternion().setEuler(0, 180, 0)
        }))
    }
}